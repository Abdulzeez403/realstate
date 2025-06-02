export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    size: number; // in sq ft/meters
    yearBuilt?: number;
    lotSize?: number;
    garage?: number;
  };
  amenities: string[];
  propertyType: 'House' | 'Apartment' | 'Condo' | 'Villa' | 'Land';
  listingType: 'Sale' | 'Rent';
  images: {
    main: string;
    gallery: string[];
  };
  agent: {
    id: string;
    name: string;
  };
  featured: boolean;
  status: 'Available' | 'Pending' | 'Sold';
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
  specializations: string[];
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  listings: number;
  experience: number;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  image: string;
  rating: number;
  date: string;
}

export interface SearchFilters {
  location?: string;
  propertyType?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  bedrooms?: number;
  bathrooms?: number;
  listingType?: 'Sale' | 'Rent' | 'All';
}