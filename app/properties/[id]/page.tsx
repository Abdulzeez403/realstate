import { notFound } from 'next/navigation';
import { getPropertyById, properties } from '@/data/properties';
import { getAgentByName } from '@/data/agents';
import PropertyGallery from '@/components/properties/PropertyGallery';
import PropertyFeatures from '@/components/properties/PropertyFeatures';
import PropertyContactForm from '@/components/properties/PropertyContactForm';
import PropertyMap from '@/components/properties/PropertyMap';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { 
  MapPin, 
  Calendar, 
  Share2, 
  Heart, 
  Printer, 
  Phone,
  MessageSquare
} from 'lucide-react';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id);
  
  if (!property) {
    return {
      title: 'Property Not Found | LuxuryEstate',
    };
  }
  
  return {
    title: `${property.title} | LuxuryEstate`,
    description: property.description.substring(0, 160),
  };
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id);
  
  if (!property) {
    notFound();
  }
  
  const agent = getAgentByName(property.agent.name);
  
  return (
    <div>
      {/* Property Header */}
      <div className="bg-primary text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                    property.listingType === 'Sale' ? 'bg-accent text-white' : 'bg-secondary text-primary'
                  }`}>
                    For {property.listingType}
                  </span>
                  <span className="text-white/80 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Listed on {new Date(property.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{property.title}</h1>
                
                <div className="flex items-center text-white/90">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>
                    {property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}
                  </span>
                </div>
              </div>
              
              <div className="text-3xl md:text-4xl font-serif font-bold">
                {property.listingType === 'Sale' 
                  ? formatPrice(property.price, property.currency)
                  : `${formatPrice(property.price, property.currency)}/month`
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Column */}
            <div className="lg:w-2/3">
              {/* Gallery */}
              <PropertyGallery 
                mainImage={property.images.main} 
                galleryImages={property.images.gallery}
              />
              
              {/* Description */}
              <div className="mt-12">
                <h2 className="text-2xl font-serif font-bold mb-6">Property Details</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p>{property.description}</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="mt-12">
                <h2 className="text-2xl font-serif font-bold mb-6">Features & Amenities</h2>
                <PropertyFeatures features={property.features} amenities={property.amenities} />
              </div>
              
              {/* Map */}
              <div className="mt-12">
                <h2 className="text-2xl font-serif font-bold mb-6">Location</h2>
                <PropertyMap 
                  address={`${property.location.address}, ${property.location.city}, ${property.location.state}`}
                  coordinates={property.location.coordinates}
                />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Action Buttons */}
              <div className="flex gap-2 mb-8">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>
              </div>
              
              {/* Agent Card */}
              {agent && (
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-serif font-bold text-lg">{agent.name}</h3>
                      <p className="text-secondary text-sm">{agent.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <Button variant="default" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <p className="mb-1">
                      <strong>Experience:</strong> {agent.experience} years
                    </p>
                    <p className="mb-1">
                      <strong>Listings:</strong> {agent.listings} properties
                    </p>
                    <p>
                      <strong>Specialization:</strong> {agent.specializations.join(', ')}
                    </p>
                  </div>
                  
                  <Button variant="link" className="p-0 h-auto text-primary">
                    View Full Profile
                  </Button>
                </div>
              )}
              
              {/* Contact Form */}
              <PropertyContactForm propertyId={property.id} propertyTitle={property.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}