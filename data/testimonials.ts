import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    name: "James & Maria Rodriguez",
    position: "Homeowners",
    content: "Working with LuxuryEstate to find our dream home was an exceptional experience. Sarah Johnson truly understood our needs and showed us properties that matched our lifestyle perfectly. Her knowledge of the market and negotiation skills saved us both time and money. We couldn't be happier with our waterfront property and highly recommend Sarah to anyone looking for luxury real estate.",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
    rating: 5,
    date: "March 15, 2023"
  },
  {
    id: "test-002",
    name: "David Thompson",
    position: "CEO, Thompson Enterprises",
    content: "Michael Chen provided outstanding service in helping me find the perfect downtown penthouse. His understanding of urban properties and investment potential was invaluable. Michael's attention to detail throughout the entire process made what could have been a stressful experience seamless and enjoyable. I've already recommended him to several colleagues looking for premium properties in the city.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 5,
    date: "April 3, 2023"
  },
  {
    id: "test-003",
    name: "Alexandra & William Chen",
    position: "Property Investors",
    content: "We've worked with multiple real estate agents over the years, but Elizabeth Taylor stands out for her exceptional knowledge of historic properties. She helped us acquire a beautiful Victorian home and guided us through the restoration process with expertise and patience. Elizabeth's passion for preserving architectural integrity while incorporating modern conveniences resulted in our dream home becoming a reality.",
    image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg",
    rating: 5,
    date: "May 20, 2023"
  },
  {
    id: "test-004",
    name: "Jennifer Davis",
    position: "First-time Homebuyer",
    content: "As a first-time homebuyer, I was intimidated by the real estate market, but Robert Williams made the process straightforward and educational. He took the time to understand my needs and financial situation, showing me options that I wouldn't have found on my own. Robert's guidance through financing and closing was invaluable. I'm now the proud owner of a beautiful home that appreciates in value every year, thanks to Robert's market insights.",
    image: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg",
    rating: 4,
    date: "June 12, 2023"
  },
  {
    id: "test-005",
    name: "Marcus & Sophia Johnson",
    position: "Luxury Home Sellers",
    content: "When it came time to sell our waterfront estate, we interviewed several agencies but chose LuxuryEstate for their marketing expertise and global reach. Sarah Johnson's staging advice and professional photography showcased our property beautifully. The virtual tour and international marketing campaign attracted qualified buyers, resulting in multiple offers above asking price. The entire process was handled with professionalism and discretion.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5,
    date: "July 8, 2023"
  }
];

export const getTestimonials = (): Testimonial[] => {
  return testimonials;
};