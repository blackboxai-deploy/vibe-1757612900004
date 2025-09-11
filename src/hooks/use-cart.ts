'use client';

import { useState, useEffect } from 'react';
import { Cart, getCartFromStorage, addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, updateQuantity as updateQuantityUtil, clearCart as clearCartUtil } from '@/lib/cart';
import { Product } from '@/lib/products';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load cart from localStorage on client side
    const savedCart = getCartFromStorage();
    setCart(savedCart);
    setIsLoaded(true);
  }, []);

  const addToCart = (product: Product, quantity: number = 1) => {
    const updatedCart = addToCartUtil(cart, product, quantity);
    setCart(updatedCart);
    return updatedCart;
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = removeFromCartUtil(cart, productId);
    setCart(updatedCart);
    return updatedCart;
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedCart = updateQuantityUtil(cart, productId, quantity);
    setCart(updatedCart);
    return updatedCart;
  };

  const clearCart = () => {
    const emptyCart = clearCartUtil();
    setCart(emptyCart);
    return emptyCart;
  };

  const isInCart = (productId: string): boolean => {
    return cart.items.some(item => item.product.id === productId);
  };

  const getItemQuantity = (productId: string): number => {
    const item = cart.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  return {
    cart,
    isLoaded,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
  };
};