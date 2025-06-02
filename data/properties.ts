import { Property } from '@/types';

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Luxury Beachfront Villa",
    description: "Experience the ultimate in luxury living with this stunning beachfront villa. Featuring panoramic ocean views, a private infinity pool, and direct beach access, this property offers an unparalleled lifestyle. The open-concept design maximizes the breathtaking vistas, while high-end finishes and smart home technology provide modern convenience. The gourmet kitchen, spacious primary suite with a spa-like bathroom, and multiple entertainment areas make this property perfect for both relaxation and hosting. Located in an exclusive gated community with 24/7 security, this villa represents the pinnacle of prestigious coastal living.",
    price: 2450000,
    currency: "USD",
    location: {
      address: "123 Oceanfront Drive",
      city: "Malibu",
      state: "California",
      zipCode: "90265",
      country: "USA",
      coordinates: {
        lat: 34.025922,
        lng: -118.779757,
      },
    },
    features: {
      bedrooms: 5,
      bathrooms: 6,
      size: 4500,
      yearBuilt: 2019,
      lotSize: 0.75,
      garage: 3,
    },
    amenities: [
      "Ocean View",
      "Infinity Pool",
      "Smart Home",
      "Wine Cellar",
      "Home Theater",
      "Chef's Kitchen",
      "Private Beach Access",
      "Outdoor Kitchen",
      "Spa/Hot Tub",
      "Fitness Room"
    ],
    propertyType: "Villa",
    listingType: "Sale",
    images: {
      main: "https://images.pexels.com/photos/32870/pexels-photo.jpg",
      gallery: [
        "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
        "https://images.pexels.com/photos/4940603/pexels-photo-4940603.jpeg",
        "https://images.pexels.com/photos/3935339/pexels-photo-3935339.jpeg",
        "https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg",
        "https://images.pexels.com/photos/5824519/pexels-photo-5824519.jpeg"
      ],
    },
    agent: {
      id: "agent-001",
      name: "Sarah Johnson",
    },
    featured: true,
    status: "Available",
    createdAt: "2023-01-15T10:30:00Z",
    updatedAt: "2023-02-10T14:45:00Z",
  },
  {
    id: "prop-002",
    title: "Modern Downtown Penthouse",
    description: "Elevate your lifestyle with this spectacular penthouse offering sweeping city views from its floor-to-ceiling windows and private rooftop terrace. This architectural masterpiece features premium finishes throughout, including Italian marble, custom cabinetry, and designer lighting. The gourmet kitchen with top-of-the-line appliances opens to an expansive living area perfect for entertaining. The primary suite includes a luxurious bathroom with a freestanding tub and walk-in rain shower. With smart home integration, concierge service, and exclusive building amenities, this penthouse represents the pinnacle of sophisticated urban living.",
    price: 1875000,
    currency: "USD",
    location: {
      address: "1000 Downtown Avenue, PH3",
      city: "Chicago",
      state: "Illinois",
      zipCode: "60601",
      country: "USA",
      coordinates: {
        lat: 41.885314,
        lng: -87.632394,
      },
    },
    features: {
      bedrooms: 3,
      bathrooms: 3.5,
      size: 2800,
      yearBuilt: 2020,
      garage: 2,
    },
    amenities: [
      "City Views",
      "Rooftop Terrace",
      "Floor-to-ceiling Windows",
      "Smart Home",
      "Concierge Service",
      "Fitness Center",
      "Swimming Pool",
      "Private Elevator",
      "Wine Storage",
      "Pet Spa"
    ],
    propertyType: "Apartment",
    listingType: "Sale",
    images: {
      main: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
      gallery: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg",
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
      ],
    },
    agent: {
      id: "agent-002",
      name: "Michael Chen",
    },
    featured: true,
    status: "Available",
    createdAt: "2023-01-20T09:15:00Z",
    updatedAt: "2023-02-12T11:30:00Z",
  },
  {
    id: "prop-003",
    title: "Historic Brownstone Townhouse",
    description: "Own a piece of history with this meticulously restored brownstone townhouse. This architectural gem combines period details—including original hardwood floors, crown moldings, and marble fireplaces—with modern updates for contemporary living. The chef's kitchen features custom cabinetry and premium appliances, while the garden level offers a separate entrance ideal for a home office or guest quarters. The private backyard garden provides a serene urban oasis. Located in a historic district close to parks, dining, and cultural attractions, this property offers timeless elegance and modern convenience in a prime location.",
    price: 3200000,
    currency: "USD",
    location: {
      address: "45 Heritage Row",
      city: "Boston",
      state: "Massachusetts",
      zipCode: "02116",
      country: "USA",
      coordinates: {
        lat: 42.351429,
        lng: -71.073710,
      },
    },
    features: {
      bedrooms: 4,
      bathrooms: 3.5,
      size: 3800,
      yearBuilt: 1890,
      lotSize: 0.1,
    },
    amenities: [
      "Original Hardwood Floors",
      "Marble Fireplaces",
      "High Ceilings",
      "Garden Patio",
      "Wine Cellar",
      "Library",
      "Separate Entrance",
      "Walk-up Attic",
      "Period Moldings",
      "Updated Systems"
    ],
    propertyType: "House",
    listingType: "Sale",
    images: {
      main: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      gallery: [
        "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg",
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg"
      ],
    },
    agent: {
      id: "agent-003",
      name: "Elizabeth Taylor",
    },
    featured: true,
    status: "Available",
    createdAt: "2023-01-25T14:20:00Z",
    updatedAt: "2023-02-15T16:40:00Z",
  },
  {
    id: "prop-004",
    title: "Contemporary Lake House",
    description: "Embrace waterfront living in this architectural masterpiece situated directly on the lakefront. Floor-to-ceiling windows showcase breathtaking water views from nearly every room, while multiple terraces provide ideal outdoor entertaining spaces. The open-concept main level features a gourmet kitchen with a large island, dining area, and great room with a dramatic stone fireplace. A floating staircase leads to the upper level with a stunning primary suite offering panoramic views. The walkout lower level includes a media room, wine cellar, and additional guest accommodations. With a private dock and boathouse, this property offers the ultimate lakeside lifestyle.",
    price: 3950000,
    currency: "USD",
    location: {
      address: "789 Lakeshore Drive",
      city: "Lake Tahoe",
      state: "Nevada",
      zipCode: "89449",
      country: "USA",
      coordinates: {
        lat: 39.097713,
        lng: -120.039636,
      },
    },
    features: {
      bedrooms: 5,
      bathrooms: 5.5,
      size: 5200,
      yearBuilt: 2018,
      lotSize: 1.2,
      garage: 3,
    },
    amenities: [
      "Waterfront",
      "Private Dock",
      "Boathouse",
      "Stone Fireplace",
      "Wine Cellar",
      "Media Room",
      "Multiple Terraces",
      "Smart Home",
      "Heated Floors",
      "Floor-to-ceiling Windows"
    ],
    propertyType: "House",
    listingType: "Sale",
    images: {
      main: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      gallery: [
        "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
        "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
      ],
    },
    agent: {
      id: "agent-001",
      name: "Sarah Johnson",
    },
    featured: true,
    status: "Available",
    createdAt: "2023-01-28T11:10:00Z",
    updatedAt: "2023-02-18T13:25:00Z",
  },
  {
    id: "prop-005",
    title: "Luxury High-Rise Apartment",
    description: "Experience elevated city living in this designer apartment with stunning views. This turnkey residence features an open floor plan with high-end finishes throughout. The gourmet kitchen includes premium appliances and custom cabinetry, while the living area offers floor-to-ceiling windows showcasing panoramic city views. The primary suite includes a spa-like bathroom and custom closets. Building amenities include 24-hour concierge, fitness center, rooftop pool, and resident lounge. Located in the heart of downtown, steps from dining, shopping, and entertainment, this property offers sophisticated urban living at its finest.",
    price: 6500,
    currency: "USD",
    location: {
      address: "500 Skyline Tower, #2103",
      city: "Seattle",
      state: "Washington",
      zipCode: "98101",
      country: "USA",
      coordinates: {
        lat: 47.608013,
        lng: -122.335167,
      },
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      size: 1800,
      yearBuilt: 2021,
    },
    amenities: [
      "City Views",
      "24-hour Concierge",
      "Rooftop Pool",
      "Fitness Center",
      "Resident Lounge",
      "Private Balcony",
      "Smart Home Features",
      "Pet Spa",
      "Package Service",
      "Electric Car Charging"
    ],
    propertyType: "Apartment",
    listingType: "Rent",
    images: {
      main: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      gallery: [
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
        "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
      ],
    },
    agent: {
      id: "agent-002",
      name: "Michael Chen",
    },
    featured: true,
    status: "Available",
    createdAt: "2023-02-01T13:45:00Z",
    updatedAt: "2023-02-20T15:20:00Z",
  },
  {
    id: "prop-006",
    title: "Mediterranean Villa with Pool",
    description: "Immerse yourself in luxury with this Mediterranean-inspired villa featuring stunning architectural details throughout. The grand entrance with soaring ceilings leads to formal living and dining spaces perfect for entertaining. The gourmet kitchen with butler's pantry opens to a family room with French doors leading to the backyard oasis. The resort-style grounds include a pool with waterfall feature, outdoor kitchen, and covered loggia. The primary retreat offers a sitting area, lavish bathroom, and custom closets. Additional features include a home office, media room, and guest casita. This exceptional property combines elegance, comfort, and privacy in a prestigious location.",
    price: 2950000,
    currency: "USD",
    location: {
      address: "75 Bella Vista Way",
      city: "Scottsdale",
      state: "Arizona",
      zipCode: "85255",
      country: "USA",
      coordinates: {
        lat: 33.678123,
        lng: -111.867920,
      },
    },
    features: {
      bedrooms: 5,
      bathrooms: 5.5,
      size: 5800,
      yearBuilt: 2015,
      lotSize: 0.85,
      garage: 3,
    },
    amenities: [
      "Swimming Pool",
      "Outdoor Kitchen",
      "Guest Casita",
      "Media Room",
      "Home Office",
      "Wine Room",
      "Covered Patio",
      "Fireplace",
      "Gated Community",
      "Mountain Views"
    ],
    propertyType: "Villa",
    listingType: "Sale",
    images: {
      main: "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
      gallery: [
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
        "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg",
        "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
        "https://images.pexels.com/photos/5824515/pexels-photo-5824515.jpeg"
      ],
    },
    agent: {
      id: "agent-003",
      name: "Elizabeth Taylor",
    },
    featured: false,
    status: "Available",
    createdAt: "2023-02-03T16:50:00Z",
    updatedAt: "2023-02-22T17:15:00Z",
  },
  {
    id: "prop-007",
    title: "Executive Family Home",
    description: "This exceptional family residence offers the perfect blend of elegance and functionality in a sought-after neighborhood. The thoughtfully designed floor plan includes formal and casual living spaces, a chef's kitchen with premium appliances, and a spacious primary suite with a luxurious bathroom. The professionally landscaped backyard features a covered patio, pool, and playground area. Additional highlights include a home office, media room, and three-car garage. With its convenient location near top schools, parks, and shopping, this property provides an ideal environment for comfortable family living.",
    price: 1250000,
    currency: "USD",
    location: {
      address: "42 Maple Avenue",
      city: "Austin",
      state: "Texas",
      zipCode: "78703",
      country: "USA",
      coordinates: {
        lat: 30.284919,
        lng: -97.753192,
      },
    },
    features: {
      bedrooms: 4,
      bathrooms: 3.5,
      size: 3200,
      yearBuilt: 2017,
      lotSize: 0.3,
      garage: 3,
    },
    amenities: [
      "Swimming Pool",
      "Home Office",
      "Media Room",
      "Covered Patio",
      "Smart Home",
      "Walk-in Closets",
      "Gourmet Kitchen",
      "Fireplace",
      "Security System",
      "Mudroom"
    ],
    propertyType: "House",
    listingType: "Sale",
    images: {
      main: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      gallery: [
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
        "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
        "https://images.pexels.com/photos/4119831/pexels-photo-4119831.jpeg"
      ],
    },
    agent: {
      id: "agent-004",
      name: "Robert Williams",
    },
    featured: false,
    status: "Available",
    createdAt: "2023-02-05T10:30:00Z",
    updatedAt: "2023-02-25T12:10:00Z",
  },
  {
    id: "prop-008",
    title: "Urban Loft Apartment",
    description: "Embrace city living in this stunning industrial-chic loft featuring soaring ceilings, exposed brick walls, and original steel beams. This open-concept space offers a sleek kitchen with concrete countertops and high-end appliances, a comfortable living area, and a separate sleeping space. Large factory windows flood the unit with natural light while providing city views. Additional features include polished concrete floors, custom lighting, and in-unit laundry. Located in a converted historic building with elevator access, secure entry, and rooftop deck, this property offers authentic loft living with modern conveniences in a vibrant neighborhood.",
    price: 3200,
    currency: "USD",
    location: {
      address: "210 Warehouse District, #507",
      city: "Portland",
      state: "Oregon",
      zipCode: "97209",
      country: "USA",
      coordinates: {
        lat: 45.523064,
        lng: -122.676483,
      },
    },
    features: {
      bedrooms: 1,
      bathrooms: 1.5,
      size: 1100,
      yearBuilt: 1925,
    },
    amenities: [
      "Exposed Brick",
      "High Ceilings",
      "City Views",
      "Rooftop Deck",
      "Elevator",
      "In-unit Laundry",
      "Secure Entry",
      "Original Features",
      "Bike Storage",
      "Pet Friendly"
    ],
    propertyType: "Apartment",
    listingType: "Rent",
    images: {
      main: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
      gallery: [
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg",
        "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg",
        "https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg",
        "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg"
      ],
    },
    agent: {
      id: "agent-002",
      name: "Michael Chen",
    },
    featured: false,
    status: "Available",
    createdAt: "2023-02-07T14:25:00Z",
    updatedAt: "2023-02-27T16:50:00Z",
  }
];

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getPropertiesByType = (type: 'Sale' | 'Rent'): Property[] => {
  return properties.filter(property => property.listingType === type);
};

export const searchProperties = (filters: {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  bedrooms?: number;
  bathrooms?: number;
  listingType?: 'Sale' | 'Rent';
}): Property[] => {
  return properties.filter(property => {
    // Location filter
    if (filters.location && !property.location.city.toLowerCase().includes(filters.location.toLowerCase()) && 
        !property.location.state.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Price filter
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }
    
    // Property type filter
    if (filters.propertyType && property.propertyType !== filters.propertyType) {
      return false;
    }
    
    // Bedrooms filter
    if (filters.bedrooms && property.features.bedrooms < filters.bedrooms) {
      return false;
    }
    
    // Bathrooms filter
    if (filters.bathrooms && property.features.bathrooms < filters.bathrooms) {
      return false;
    }
    
    // Listing type filter
    if (filters.listingType && property.listingType !== filters.listingType) {
      return false;
    }
    
    return true;
  });
};