import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-[#0071ce] to-[#004c91] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-[#ffc220] text-[#0071ce] px-4 py-2 rounded-full text-sm font-bold">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                FREE SHIPPING on orders $35+
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Save Money.
                <br />
                <span className="text-[#ffc220]">Live Better.</span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Shop millions of items online and in-store. Get everything you need delivered fast or pick up in-store today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/categories">
                <Button size="lg" className="bg-[#ffc220] hover:bg-[#e6af1e] text-[#0071ce] font-bold px-8 py-4 text-lg">
                  Shop Now
                </Button>
              </Link>
              <Link href="/categories?category=grocery">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0071ce] font-bold px-8 py-4 text-lg">
                  Grocery Delivery
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <div className="bg-[#ffc220] p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#0071ce]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Free Shipping $35+</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#ffc220] p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#0071ce]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Best Prices</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-[#ffc220] p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#0071ce]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Same-Day Pickup</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a3440b1-2951-4ad5-99ad-598fe136bec5.png"
                alt="Happy family shopping at Walmart"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg z-20 transform rotate-3">
              <div className="text-sm font-bold text-green-600">SAVE 25%</div>
              <div className="text-xs">Electronics</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg z-20 transform -rotate-3">
              <div className="text-sm font-bold text-blue-600">FREE DELIVERY</div>
              <div className="text-xs">Grocery Orders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,80C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
}