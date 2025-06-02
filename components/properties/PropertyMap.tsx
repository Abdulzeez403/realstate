"use client";

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

interface PropertyMapProps {
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const PropertyMap = ({ address, coordinates }: PropertyMapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // In a real application, you would use a proper mapping library like Google Maps
  // For this example, we're displaying a placeholder with the address
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {isClient ? (
        <div className="relative aspect-[16/9] bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <p className="text-lg font-medium mb-2">Property Location</p>
            <p className="text-gray-500 dark:text-gray-400">{address}</p>
            {coordinates && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Coordinates: {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
              </p>
            )}
            <p className="mt-4 text-sm">
              For privacy reasons, the exact location is not displayed. Please contact the agent for more details.
            </p>
          </div>
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gray-100 dark:bg-slate-800"></div>
      )}
    </div>
  );
};

export default PropertyMap;