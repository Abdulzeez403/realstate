import { Metadata } from 'next';
import { properties } from '@/data/properties';
import PropertyList from '@/components/properties/PropertyList';
import PropertyFilters from '@/components/properties/PropertyFilters';

export const metadata: Metadata = {
  title: 'Properties | LuxuryEstate',
  description: 'Browse our exclusive collection of luxury properties',
};

export default function PropertiesPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const type = typeof searchParams.type === 'string' ? searchParams.type : 'all';
  const featured = searchParams.featured === 'true';
  
  let filteredProperties = properties;
  
  // Apply type filter
  if (type === 'sale') {
    filteredProperties = properties.filter(property => property.listingType === 'Sale');
  } else if (type === 'rent') {
    filteredProperties = properties.filter(property => property.listingType === 'Rent');
  }
  
  // Apply featured filter
  if (featured) {
    filteredProperties = filteredProperties.filter(property => property.featured);
  }
  
  return (
    <div>
      {/* Page Header */}
      <div 
        className="bg-cover bg-center py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 52, 96, 0.8), rgba(15, 52, 96, 0.8)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Properties</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse our collection of exceptional properties and find your perfect home
          </p>
        </div>
      </div>
      
      {/* Properties Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <PropertyFilters currentType={type} />
          </div>
          
          {/* Property Listings */}
          <div className="lg:col-span-3">
            <PropertyList properties={filteredProperties} />
          </div>
        </div>
      </div>
    </div>
  );
}