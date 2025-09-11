'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, isLoaded } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const estimatedTax = cart.total * 0.08; // 8% tax
  const shipping = cart.total >= 35 ? 0 : 5.99;
  const finalTotal = cart.total + estimatedTax + shipping;

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0071ce] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading your cart...</p>
        </div>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3H3m4 10v6a1 1 0 001 1h10a1 1 0 001-1v-6M9 19h.01M20 19h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Start shopping to add items to your cart.</p>
              <Link href="/categories">
                <Button className="bg-[#0071ce] hover:bg-[#004c91] text-white font-bold px-8 py-3">
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Your Cart ({cart.itemCount} {cart.itemCount === 1 ? 'item' : 'items'})
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <Card key={item.product.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <Link href={`/product/${item.product.id}`}>
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-lg hover:opacity-80 transition-opacity"
                        />
                      </Link>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-4">
                      <div>
                        {item.product.brand && (
                          <p className="text-sm text-gray-600 font-medium">{item.product.brand}</p>
                        )}
                        <Link 
                          href={`/product/${item.product.id}`}
                          className="text-lg font-medium text-gray-900 hover:text-[#0071ce] transition-colors block"
                        >
                          {item.product.name}
                        </Link>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">Qty:</span>
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-3 py-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-3 py-2 hover:bg-gray-100 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-gray-900">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                          {item.quantity > 1 && (
                            <span className="text-sm text-gray-500">
                              {formatPrice(item.product.price)} each
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                        >
                          Remove
                        </button>
                        {item.product.freeShipping && (
                          <span className="text-green-600 text-sm font-medium">Free shipping</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end pt-4">
              <Button
                onClick={clearCart}
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cart.itemCount} items)</span>
                    <span className="font-medium">{formatPrice(cart.total)}</span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                      {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                    </span>
                  </div>

                  {/* Free Shipping Message */}
                  {cart.total < 35 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-800">
                        Add {formatPrice(35 - cart.total)} more to get FREE shipping!
                      </p>
                    </div>
                  )}

                  {/* Tax */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Tax</span>
                    <span className="font-medium">{formatPrice(estimatedTax)}</span>
                  </div>

                  <hr />

                  {/* Total */}
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(finalTotal)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full mt-6 bg-[#ffc220] hover:bg-[#e6af1e] text-[#0071ce] font-bold py-3 text-lg">
                  Proceed to Checkout
                </Button>

                {/* Continue Shopping */}
                <Link href="/categories" className="block mt-4">
                  <Button variant="outline" className="w-full border-[#0071ce] text-[#0071ce] hover:bg-[#0071ce] hover:text-white">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Security Icons */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-xs">Secure Checkout</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      <span className="text-xs">Easy Returns</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}