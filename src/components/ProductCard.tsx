'use client';

import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isInCart, getItemQuantity } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    addToCart(product, 1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">({product.reviewCount})</span>
      </div>
    );
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-[#0071ce]">
      <Link href={`/product/${product.id}`}>
        <CardContent className="p-4">
          {/* Product Image */}
          <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            
            {/* Discount Badge */}
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                SAVE ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            )}

            {/* Free Shipping Badge */}
            {product.freeShipping && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                FREE SHIPPING
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            {/* Brand */}
            {product.brand && (
              <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
            )}

            {/* Product Name */}
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-[#0071ce] transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              
              {/* Quantity in Cart */}
              {isInCart(product.id) && (
                <span className="text-xs bg-[#0071ce] text-white px-2 py-1 rounded-full">
                  {getItemQuantity(product.id)} in cart
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-[#ffc220] hover:bg-[#e6af1e] text-black font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </Card>
  );
}