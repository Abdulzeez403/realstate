import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import { getFeaturedProperties } from '@/data/properties';
import { getTestimonials } from '@/data/testimonials';

export default function Home() {
  const featuredProperties = getFeaturedProperties();
  const testimonials = getTestimonials();
  
  return (
    <div>
      <HeroSection />
      <FeaturedProperties properties={featuredProperties} />
      <AboutSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </div>
  );
}