'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { searchProducts } from '@/lib/products';
import { Button } from '@/components/ui/button';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const popularSearches = [
    'iPhone', 'Samsung TV', 'Nike shoes', 'KitchenAid mixer',
    'Dyson vacuum', 'organic bananas', 'milk', 'laptops'
  ];

  useEffect(() => {
    if (query.length > 2) {
      const products = searchProducts(query);
      const productSuggestions = products.slice(0, 5).map(p => p.name);
      const keywordSuggestions = popularSearches.filter(search => 
        search.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3);
      
      setSuggestions([...new Set([...productSuggestions, ...keywordSuggestions])]);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      router.push(`/categories?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
      setQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  return (
    <div className="relative w-full">
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search everything at Walmart online and in store"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => query.length > 2 && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#ffc220] focus:border-transparent"
        />
        <Button
          onClick={() => handleSearch()}
          className="bg-[#ffc220] hover:bg-[#e6af1e] text-black px-6 py-2 rounded-r-full font-medium border-2 border-[#ffc220] hover:border-[#e6af1e]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Button>
      </div>

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50 mt-1">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 text-black border-b last:border-b-0 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}