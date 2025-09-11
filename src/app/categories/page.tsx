'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, categories, searchProducts } from '@/lib/products';
import { ProductGrid } from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function CategoriesPageContent() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<string>('all');

  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || '';

  useEffect(() => {
    let result = products;

    // Apply search filter
    if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    // Apply category filter
    const activeCategory = categoryParam || selectedCategory;
    if (activeCategory && activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }

    // Apply price filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under25':
          result = result.filter(product => product.price < 25);
          break;
        case '25to100':
          result = result.filter(product => product.price >= 25 && product.price <= 100);
          break;
        case '100to500':
          result = result.filter(product => product.price > 100 && product.price <= 500);
          break;
        case 'over500':
          result = result.filter(product => product.price > 500);
          break;
      }
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result = [...result].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(result);
  }, [searchQuery, categoryParam, selectedCategory, sortBy, priceRange]);

  const getPageTitle = () => {
    if (searchQuery) {
      return `Search results for "${searchQuery}"`;
    }
    if (categoryParam) {
      const category = categories.find(cat => cat.id === categoryParam);
      return category ? category.name : 'All Products';
    }
    return 'All Departments';
  };

  const getPageSubtitle = () => {
    if (searchQuery) {
      return `${filteredProducts.length} products found`;
    }
    return 'Shop our wide selection of products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {getPageTitle()}
              </h1>
              <p className="text-gray-600 mt-1">
                {getPageSubtitle()}
              </p>
            </div>

            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071ce] focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Categories Filter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value="all"
                        checked={!categoryParam && selectedCategory === 'all'}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-[#0071ce] focus:ring-[#0071ce]"
                      />
                      <span className="text-sm">All Products ({products.length})</span>
                    </label>
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={categoryParam === category.id || selectedCategory === category.id}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="text-[#0071ce] focus:ring-[#0071ce]"
                        />
                        <span className="text-sm">{category.name} ({category.productCount})</span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Price Filter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="all"
                        checked={priceRange === 'all'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-[#0071ce] focus:ring-[#0071ce]"
                      />
                      <span className="text-sm">All Prices</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="under25"
                        checked={priceRange === 'under25'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-[#0071ce] focus:ring-[#0071ce]"
                      />
                      <span className="text-sm">Under $25</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="25to100"
                        checked={priceRange === '25to100'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-[#0071ce] focus:ring-[#0071ce]"
                      />
                      <span className="text-sm">$25 - $100</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="100to500"
                        checked={priceRange === '100to500'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-[#0071ce] focus:ring-[#0071ce]"
                      />
                      <span className="text-sm">$100 - $500</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value="over500"
                        checked={priceRange === 'over500'}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-[#0071ce] focus:ring-[#0071ce]"
                      />
                      <span className="text-sm">Over $500</span>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Clear Filters */}
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                  setSortBy('featured');
                }}
                variant="outline"
                className="w-full border-[#0071ce] text-[#0071ce] hover:bg-[#0071ce] hover:text-white"
              >
                Clear All Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <ProductGrid products={filteredProducts} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0071ce] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading categories...</p>
        </div>
      </div>
    }>
      <CategoriesPageContent />
    </Suspense>
  );
}