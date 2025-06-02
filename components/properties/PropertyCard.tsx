import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';
import { formatPrice } from '@/lib/utils';
import { MapPin, Bed, Bath, Maximize, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="property-card bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3]">
        {/* Image */}
        <img
          src={property.images.main}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Badge */}
        <div className={`property-badge ${property.listingType.toLowerCase()}`}>
          {property.listingType === 'Sale' ? 'For Sale' : 'For Rent'}
        </div>
        
        {/* Quick View Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Link href={`/properties/${property.id}`}>
            <Button variant="secondary" size="sm" className="rounded-full">
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="p-5">
        {/* Price */}
        <div className="text-xl font-serif font-bold mb-2 text-primary">
          {property.listingType === 'Sale' 
            ? formatPrice(property.price, property.currency)
            : `${formatPrice(property.price, property.currency)}/month`
          }
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-serif font-semibold mb-2 line-clamp-1">
          <Link href={`/properties/${property.id}`} className="hover:text-secondary transition-colors">
            {property.title}
          </Link>
        </h3>
        
        {/* Location */}
        <p className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">
            {property.location.city}, {property.location.state}
          </span>
        </p>
        
        {/* Features */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-sm">
            <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{property.features.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-sm">
            <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{property.features.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-sm">
            <Maximize className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{property.features.size} sq ft</span>
          </div>
        </div>
      </div>
      
      {/* View Details Button */}
      <Link href={`/properties/${property.id}`} className="block">
        <div className="px-5 py-3 bg-gray-50 dark:bg-slate-700 text-center font-medium hover:bg-secondary hover:text-primary-foreground transition-colors">
          View Details
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;