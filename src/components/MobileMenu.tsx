'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      
      {/* Menu Content */}
      <div className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="bg-[#0071ce] p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[#ffc220] text-[#0071ce] px-3 py-2 rounded-full font-bold text-lg">
              W
            </div>
            <div className="text-white">
              <div className="text-lg font-bold">Walmart</div>
              <div className="text-xs text-blue-200">Save money. Live better.</div>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            className="text-white hover:bg-blue-600 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {/* Menu Items */}
        <div className="p-4">
          {/* Account Section */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <Button
              variant="outline"
              className="w-full justify-start mb-2 text-black border-gray-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13 3V7H9C7.9 7 7 7.9 7 9V22H9V16H15V22H17V9C17 7.9 16.1 7 15 7H13Z"/>
              </svg>
              Sign In / Account
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <Link 
              href="/" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/categories" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              All Departments
            </Link>
            <Link 
              href="/categories?category=grocery" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              Grocery
            </Link>
            <Link 
              href="/categories?category=electronics" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              Electronics
            </Link>
            <Link 
              href="/categories?category=home" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              Home & Kitchen
            </Link>
            <Link 
              href="/categories?category=fashion" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              Fashion
            </Link>
            <Link 
              href="/categories?category=health" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              Health & Beauty
            </Link>
            <Link 
              href="/categories?category=sports" 
              onClick={onClose}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              Sports & Outdoors
            </Link>
          </nav>

          {/* Special Links */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link 
              href="/cart" 
              onClick={onClose}
              className="block px-4 py-3 text-[#0071ce] hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              My Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}