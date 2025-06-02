"use client";

import { useState } from 'react';
import { Property } from '@/types';
import PropertyCard from '@/components/properties/PropertyCard';
import { Button } from '@/components/ui/button';
import { Building, Home, Bed, Bath, Grid2X2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  const [filter, setFilter] = useState<'All' | 'Sale' | 'Rent'>('All');
  
  const filteredProperties = filter === 'All' 
    ? properties 
    : properties.filter(property => property.listingType === filter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Featured Properties
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our handpicked selection of exceptional properties. Each listing represents the finest in luxury real estate, carefully curated for discerning clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button
              variant={filter === 'All' ? 'default' : 'outline'}
              className={`rounded-l-md ${filter === 'All' ? 'bg-primary text-white' : ''}`}
              onClick={() => setFilter('All')}
            >
              <Grid2X2 className="mr-2 h-4 w-4" />
              All Properties
            </Button>
            <Button
              variant={filter === 'Sale' ? 'default' : 'outline'}
              className={`${filter === 'Sale' ? 'bg-primary text-white' : ''}`}
              onClick={() => setFilter('Sale')}
            >
              <Home className="mr-2 h-4 w-4" />
              For Sale
            </Button>
            <Button
              variant={filter === 'Rent' ? 'default' : 'outline'}
              className={`rounded-r-md ${filter === 'Rent' ? 'bg-primary text-white' : ''}`}
              onClick={() => setFilter('Rent')}
            >
              <Building className="mr-2 h-4 w-4" />
              For Rent
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/properties">
            <Button variant="secondary" className="px-6">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;