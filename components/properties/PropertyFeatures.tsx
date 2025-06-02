import { Bed, Bath, Maximize, Calendar, Ruler, Car } from 'lucide-react';

interface FeaturesProps {
  features: {
    bedrooms: number;
    bathrooms: number;
    size: number;
    yearBuilt?: number;
    lotSize?: number;
    garage?: number;
  };
  amenities: string[];
}

const PropertyFeatures = ({ features, amenities }: FeaturesProps) => {
  return (
    <div>
      {/* Main Features */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
          <Bed className="h-6 w-6 mx-auto mb-2 text-secondary" />
          <span className="text-lg font-medium block mb-1">{features.bedrooms}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Bedrooms</span>
        </div>
        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
          <Bath className="h-6 w-6 mx-auto mb-2 text-secondary" />
          <span className="text-lg font-medium block mb-1">{features.bathrooms}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Bathrooms</span>
        </div>
        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
          <Maximize className="h-6 w-6 mx-auto mb-2 text-secondary" />
          <span className="text-lg font-medium block mb-1">{features.size}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Sq Ft</span>
        </div>
        {features.yearBuilt && (
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
            <Calendar className="h-6 w-6 mx-auto mb-2 text-secondary" />
            <span className="text-lg font-medium block mb-1">{features.yearBuilt}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Year Built</span>
          </div>
        )}
        {features.lotSize && (
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
            <Ruler className="h-6 w-6 mx-auto mb-2 text-secondary" />
            <span className="text-lg font-medium block mb-1">{features.lotSize}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Lot Size (acres)</span>
          </div>
        )}
        {features.garage && (
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center">
            <Car className="h-6 w-6 mx-auto mb-2 text-secondary" />
            <span className="text-lg font-medium block mb-1">{features.garage}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Garage</span>
          </div>
        )}
      </div>

      {/* Amenities */}
      <h3 className="text-xl font-medium mb-4">Amenities & Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 mb-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;