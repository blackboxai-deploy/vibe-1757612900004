import Link from 'next/link';
import { categories } from '@/lib/products';
import { Card, CardContent } from '@/components/ui/card';

export function CategoriesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find everything you need in our wide selection of departments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/categories?category=${category.id}`}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    {/* Category Image */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Category Info */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 group-hover:text-[#0071ce] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.productCount.toLocaleString()} items
                      </p>
                    </div>

                    {/* Shop Now Button */}
                    <div className="pt-2">
                      <span className="inline-flex items-center text-[#0071ce] font-medium text-sm group-hover:text-[#004c91] transition-colors">
                        Shop Now
                        <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link href="/categories">
            <button className="bg-[#0071ce] hover:bg-[#004c91] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
              View All Departments
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}