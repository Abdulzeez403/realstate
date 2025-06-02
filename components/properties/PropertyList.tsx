import { Property } from '@/types';
import PropertyCard from '@/components/properties/PropertyCard';

interface PropertyListProps {
  properties: Property[];
}

const PropertyList = ({ properties }: PropertyListProps) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-4">No properties found</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your search criteria to find properties.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-semibold">
          {properties.length} Properties Found
        </h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Sort by:</span>
          <select className="border border-gray-300 dark:border-gray-600 rounded-md py-1 px-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-800">
            <option value="newest">Newest</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="beds">Most Bedrooms</option>
            <option value="baths">Most Bathrooms</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;