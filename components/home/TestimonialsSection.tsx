"use client";

import { useEffect, useState } from 'react';
import { Testimonial } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Autoplay testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-secondary fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Hear from our satisfied clients about their experiences working with LuxuryEstate to find their dream properties.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={prevTestimonial}
                className="bg-white dark:bg-slate-800 h-12 w-12 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <Card className="bg-white dark:bg-slate-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 aspect-square md:aspect-auto">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center relative">
                    <Quote className="absolute top-6 right-6 h-12 w-12 text-gray-200 dark:text-gray-700" />
                    
                    <div className="flex mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic mb-6 relative z-10">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    <div>
                      <div className="font-serif font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].position}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={nextTestimonial}
                className="bg-white dark:bg-slate-800 h-12 w-12 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-secondary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Years of Experience</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Properties Sold</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Client Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;