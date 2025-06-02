"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { CheckboxItem } from '@/components/ui/checkbox';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Search, RefreshCw } from 'lucide-react';

interface PropertyFiltersProps {
  currentType?: string;
}

const PropertyFilters = ({ currentType = 'all' }: PropertyFiltersProps) => {
  const router = useRouter();
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [selectedType, setSelectedType] = useState<string>(currentType);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [bathrooms, setBathrooms] = useState<number | null>(null);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  
  const handleSearch = () => {
    // In a real app, this would build a query string and navigate
    console.log('Filter values:', { priceRange, selectedType, bedrooms, bathrooms, propertyTypes, amenities });
    
    // Example of how you might navigate with these filters
    const params = new URLSearchParams();
    params.set('type', selectedType);
    if (bedrooms) params.set('beds', bedrooms.toString());
    if (bathrooms) params.set('baths', bathrooms.toString());
    if (propertyTypes.length) params.set('propertyTypes', propertyTypes.join(','));
    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());
    
    router.push(`/properties?${params.toString()}`);
  };
  
  const handleReset = () => {
    setPriceRange([0, 10000000]);
    setSelectedType('all');
    setBedrooms(null);
    setBathrooms(null);
    setPropertyTypes([]);
    setAmenities([]);
  };
  
  const togglePropertyType = (type: string) => {
    if (propertyTypes.includes(type)) {
      setPropertyTypes(propertyTypes.filter(t => t !== type));
    } else {
      setPropertyTypes([...propertyTypes, type]);
    }
  };
  
  const toggleAmenity = (amenity: string) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter(a => a !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-serif font-semibold mb-4">Filter Properties</h2>
        <div className="flex space-x-2 mb-6">
          <Button 
            variant={selectedType === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setSelectedType('all')}
          >
            All
          </Button>
          <Button 
            variant={selectedType === 'sale' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setSelectedType('sale')}
          >
            For Sale
          </Button>
          <Button 
            variant={selectedType === 'rent' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setSelectedType('rent')}
          >
            For Rent
          </Button>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={['price', 'bedrooms', 'bathrooms']}>
        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="py-4">
              <Slider
                defaultValue={[0, 10000000]}
                max={10000000}
                step={50000}
                value={[priceRange[0], priceRange[1]]}
                onValueChange={(value) => setPriceRange([value[0], value[1]])}
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bedrooms">
          <AccordionTrigger className="text-lg font-medium">Bedrooms</AccordionTrigger>
          <AccordionContent>
            <div className="py-2 flex flex-wrap gap-2">
              {[null, 1, 2, 3, 4, 5].map((num) => (
                <Button 
                  key={num === null ? 'any' : num}
                  variant={bedrooms === num ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setBedrooms(num)}
                >
                  {num === null ? 'Any' : num === 5 ? '5+' : num}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bathrooms">
          <AccordionTrigger className="text-lg font-medium">Bathrooms</AccordionTrigger>
          <AccordionContent>
            <div className="py-2 flex flex-wrap gap-2">
              {[null, 1, 2, 3, 4, 5].map((num) => (
                <Button 
                  key={num === null ? 'any' : num}
                  variant={bathrooms === num ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setBathrooms(num)}
                >
                  {num === null ? 'Any' : num === 5 ? '5+' : num}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="propertyType">
          <AccordionTrigger className="text-lg font-medium">Property Type</AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-2">
              {['House', 'Apartment', 'Condo', 'Villa', 'Land'].map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`type-${type}`}
                    checked={propertyTypes.includes(type)}
                    onChange={() => togglePropertyType(type)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={`type-${type}`} className="ml-2 text-sm font-medium">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="amenities">
          <AccordionTrigger className="text-lg font-medium">Amenities</AccordionTrigger>
          <AccordionContent>
            <div className="py-2 space-y-2">
              {['Swimming Pool', 'Garden', 'Garage', 'Balcony', 'Air Conditioning', 'Gym', 'Fireplace', 'Security System'].map((amenity) => (
                <div key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`amenity-${amenity}`}
                    checked={amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor={`amenity-${amenity}`} className="ml-2 text-sm font-medium">
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 space-y-3">
        <Button className="w-full" onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" />
          Search Properties
        </Button>
        <Button variant="outline" className="w-full" onClick={handleReset}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilters;