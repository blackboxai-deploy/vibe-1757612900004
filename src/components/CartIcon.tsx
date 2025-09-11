'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';

export function CartIcon() {
  const { cart, isLoaded } = useCart();

  return (
    <Link href="/cart">
      <Button
        variant="ghost"
        className="text-white hover:bg-blue-600 hover:text-white p-2 relative"
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3H3m4 10v6a1 1 0 001 1h10a1 1 0 001-1v-6M9 19h.01M20 19h.01" 
              />
            </svg>
            
            {/* Cart Badge */}
            {isLoaded && cart.itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ffc220] text-[#0071ce] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] px-1">
                {cart.itemCount > 99 ? '99+' : cart.itemCount}
              </span>
            )}
          </div>
          <span className="text-xs mt-1">
            {isLoaded && cart.total > 0 ? `$${cart.total.toFixed(2)}` : 'Cart'}
          </span>
        </div>
      </Button>
    </Link>
  );
}