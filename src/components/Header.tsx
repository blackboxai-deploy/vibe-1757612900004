'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { CartIcon } from './CartIcon';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0071ce] text-white sticky top-0 z-50">
        {/* Top Banner */}
        <div className="bg-[#004c91] px-4 py-1 text-center text-sm">
          <span>Free shipping on orders $35+ | Same-day delivery available</span>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="bg-[#ffc220] text-[#0071ce] px-3 py-2 rounded-full font-bold text-xl">
                  W
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold">Walmart</div>
                  <div className="text-xs text-blue-200">Save money. Live better.</div>
                </div>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <SearchBar />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Account Menu */}
              <div className="hidden lg:block">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-blue-600 hover:text-white p-2"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 mb-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13 3V7H9C7.9 7 7 7.9 7 9V22H9V16H15V22H17V9C17 7.9 16.1 7 15 7H13Z"/>
                      </svg>
                    </div>
                    <span className="text-xs">Account</span>
                  </div>
                </Button>
              </div>

              {/* Cart */}
              <CartIcon />
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="md:hidden pb-4">
            <SearchBar />
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="bg-[#004c91] hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-8 h-12">
              <Link href="/categories" className="hover:text-yellow-300 text-sm font-medium">
                All Departments
              </Link>
              <Link href="/categories?category=grocery" className="hover:text-yellow-300 text-sm">
                Grocery
              </Link>
              <Link href="/categories?category=electronics" className="hover:text-yellow-300 text-sm">
                Electronics
              </Link>
              <Link href="/categories?category=home" className="hover:text-yellow-300 text-sm">
                Home
              </Link>
              <Link href="/categories?category=fashion" className="hover:text-yellow-300 text-sm">
                Fashion
              </Link>
              <Link href="/categories?category=health" className="hover:text-yellow-300 text-sm">
                Health & Beauty
              </Link>
              <Link href="/categories?category=sports" className="hover:text-yellow-300 text-sm">
                Sports & Outdoors
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}