import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const CART_STORAGE_KEY = 'walmart-cart';

export const getCartFromStorage = (): Cart => {
  if (typeof window === 'undefined') {
    return { items: [], total: 0, itemCount: 0 };
  }

  try {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    if (cartData) {
      const cart: Cart = JSON.parse(cartData);
      return cart;
    }
  } catch (error) {
    console.error('Error reading cart from localStorage:', error);
  }

  return { items: [], total: 0, itemCount: 0 };
};

export const saveCartToStorage = (cart: Cart): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

export const calculateCartTotals = (items: CartItem[]): { total: number; itemCount: number } => {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  return { total, itemCount };
};

export const addToCart = (cart: Cart, product: Product, quantity: number = 1): Cart => {
  const existingItemIndex = cart.items.findIndex(item => item.product.id === product.id);
  
  let updatedItems: CartItem[];
  
  if (existingItemIndex >= 0) {
    // Update existing item quantity
    updatedItems = cart.items.map((item, index) => 
      index === existingItemIndex 
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    // Add new item
    updatedItems = [...cart.items, { product, quantity }];
  }

  const { total, itemCount } = calculateCartTotals(updatedItems);
  const updatedCart = { items: updatedItems, total, itemCount };
  
  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const removeFromCart = (cart: Cart, productId: string): Cart => {
  const updatedItems = cart.items.filter(item => item.product.id !== productId);
  const { total, itemCount } = calculateCartTotals(updatedItems);
  const updatedCart = { items: updatedItems, total, itemCount };
  
  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const updateQuantity = (cart: Cart, productId: string, quantity: number): Cart => {
  if (quantity <= 0) {
    return removeFromCart(cart, productId);
  }

  const updatedItems = cart.items.map(item => 
    item.product.id === productId 
      ? { ...item, quantity }
      : item
  );

  const { total, itemCount } = calculateCartTotals(updatedItems);
  const updatedCart = { items: updatedItems, total, itemCount };
  
  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const clearCart = (): Cart => {
  const emptyCart = { items: [], total: 0, itemCount: 0 };
  saveCartToStorage(emptyCart);
  return emptyCart;
};