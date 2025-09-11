import { HeroBanner } from '@/components/HeroBanner';
import { CategoriesGrid } from '@/components/CategoriesGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/lib/products';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories Section */}
      <CategoriesGrid />

      {/* Featured Products */}
      <ProductGrid 
        products={featuredProducts} 
        title="Featured Products"
        subtitle="Discover our most popular items with the best deals and highest ratings"
      />

      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-[#0071ce] to-[#004c91] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Special Offers & Deals
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Don't miss out on these limited-time offers and exclusive deals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Deal 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="bg-[#ffc220] text-[#0071ce] px-4 py-2 rounded-full font-bold text-sm inline-block">
                  LIMITED TIME
                </div>
                <h3 className="text-xl font-bold">Electronics Sale</h3>
                <p className="text-blue-100">Up to 40% off TVs, laptops, and more</p>
                <Link href="/categories?category=electronics">
                  <button className="bg-[#ffc220] hover:bg-[#e6af1e] text-[#0071ce] font-bold py-2 px-6 rounded-full transition-colors">
                    Shop Electronics
                  </button>
                </Link>
              </div>
            </div>

            {/* Deal 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm inline-block">
                  FREE SHIPPING
                </div>
                <h3 className="text-xl font-bold">Grocery Delivery</h3>
                <p className="text-blue-100">Same-day delivery on grocery orders</p>
                <Link href="/categories?category=grocery">
                  <button className="bg-[#ffc220] hover:bg-[#e6af1e] text-[#0071ce] font-bold py-2 px-6 rounded-full transition-colors">
                    Order Groceries
                  </button>
                </Link>
              </div>
            </div>

            {/* Deal 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm inline-block">
                  SAVE BIG
                </div>
                <h3 className="text-xl font-bold">Home & Garden</h3>
                <p className="text-blue-100">Transform your space for less</p>
                <Link href="/categories?category=home">
                  <button className="bg-[#ffc220] hover:bg-[#e6af1e] text-[#0071ce] font-bold py-2 px-6 rounded-full transition-colors">
                    Shop Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Shop with Walmart?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More ways to shop, save, and get what you need
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0071ce] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders $35+ or with Walmart+</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0071ce] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Everyday low prices you can count on</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0071ce] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">90-day return policy on most items</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0071ce] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Store Pickup</h3>
              <p className="text-gray-600 text-sm">Order online, pick up in-store today</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}