"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyGalleryProps {
  mainImage: string;
  galleryImages: string[];
}

const PropertyGallery = ({ mainImage, galleryImages }: PropertyGalleryProps) => {
  const allImages = [mainImage, ...galleryImages];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="relative rounded-lg overflow-hidden">
        <div className="aspect-[16/9] relative">
          <img
            src={allImages[currentIndex]}
            alt="Property"
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Fullscreen Button */}
          <button 
            className="absolute right-4 top-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            onClick={() => setIsFullscreen(true)}
          >
            <Maximize className="h-5 w-5" />
          </button>
          
          {/* Counter */}
          <div className="absolute left-4 bottom-4 bg-black/50 text-white text-sm py-1 px-3 rounded-full">
            {currentIndex + 1} / {allImages.length}
          </div>
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
        {allImages.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
              currentIndex === index ? 'ring-2 ring-secondary' : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => setSlide(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Fullscreen Gallery Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="p-4 flex justify-end">
            <button
              className="text-white hover:text-gray-300"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <img
              src={allImages[currentIndex]}
              alt="Property"
              className="max-h-full max-w-full object-contain"
            />
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center"
              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
          
          <div className="p-4 flex justify-center">
            <div className="bg-white/10 text-white px-4 py-2 rounded-full">
              {currentIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyGallery;