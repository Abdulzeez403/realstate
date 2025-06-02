"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SearchFilters } from '@/types';
import Link from 'next/link';
import { MapPin, Home, DollarSign, Search } from 'lucide-react';

const HeroSection = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: '',
    propertyType: 'All',
    priceRange: { min: 0, max: 10000000 },
    listingType: 'All',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results with these filters
    console.log('Search filters:', searchFilters);
  };

  return (
    <div 
      className="hero-gradient"
      style={{ '--image-url': 'url("https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg")' } as any}
    >
      <div className="container mx-auto px-4 py-32 md:py-48 lg:py-56">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fadeIn">
            Find Your Dream Property
          </h1>
          <p className="text-xl text-white/90 mb-12 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Discover exceptional homes in premium locations with LuxuryEstate, your trusted partner in luxury real estate.
          </p>

          {/* Search Bar */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-xl animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Location */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Location"
                    className="pl-10 w-full h-12 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent"
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
                  />
                </div>

                {/* Property Type */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Home className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 w-full h-12 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent appearance-none"
                    value={searchFilters.propertyType}
                    onChange={(e) => setSearchFilters({ ...searchFilters, propertyType: e.target.value })}
                  >
                    <option value="All">All Property Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="Villa">Villa</option>
                    <option value="Land">Land</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 w-full h-12 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent appearance-none"
                    onChange={(e) => {
                      const [min, max] = e.target.value.split('-').map(Number);
                      setSearchFilters({ ...searchFilters, priceRange: { min, max } });
                    }}
                  >
                    <option value="0-10000000">Any Price</option>
                    <option value="0-500000">Up to $500,000</option>
                    <option value="500000-1000000">$500,000 - $1,000,000</option>
                    <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
                    <option value="2000000-5000000">$2,000,000 - $5,000,000</option>
                    <option value="5000000-10000000">$5,000,000+</option>
                  </select>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="h-12 bg-primary hover:bg-primary-light text-white">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
              
              {/* Additional Options */}
              <div className="flex flex-wrap justify-center mt-4 gap-4 text-primary">
                <Link href="/properties?type=sale" className="text-sm font-medium hover:text-secondary transition-colors">
                  Properties for Sale
                </Link>
                <Link href="/properties?type=rent" className="text-sm font-medium hover:text-secondary transition-colors">
                  Properties for Rent
                </Link>
                <Link href="/properties?featured=true" className="text-sm font-medium hover:text-secondary transition-colors">
                  Featured Properties
                </Link>
                <Link href="/advanced-search" className="text-sm font-medium hover:text-secondary transition-colors">
                  Advanced Search
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;