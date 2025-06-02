import { Metadata } from 'next';
import { getAllAgents } from '@/data/agents';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Users, 
  Home, 
  Clock,
  CheckCircle,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | LuxuryEstate',
  description: 'Learn about our expert team and company history',
};

export default function AboutPage() {
  const agents = getAllAgents();

  return (
    <div>
      {/* Page Header */}
      <div 
        className="bg-cover bg-center py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 52, 96, 0.8), rgba(15, 52, 96, 0.8)), url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About LuxuryEstate</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet our team of experts and learn about our commitment to exceptional service in luxury real estate
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  A Legacy of Excellence in Luxury Real Estate
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Founded in 2005, LuxuryEstate began with a vision to transform the luxury real estate experience through personalized service, market expertise, and a commitment to excellence. What started as a boutique agency has grown into a respected name in premium properties across the country.
                  </p>
                  <p>
                    Our founder, Jonathan Reynolds, established LuxuryEstate after a successful 20-year career in high-end property development. His deep understanding of architectural integrity, investment value, and client needs became the foundation of our approach.
                  </p>
                  <p>
                    Today, our team of specialized agents continues this tradition, providing unparalleled service to clients seeking exceptional homes or investment opportunities in the luxury market.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Client-First Approach</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tailored service based on your unique needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Market Expertise</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Deep knowledge of luxury markets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Exclusive Access</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Properties not available to the general market</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Results-Driven</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Proven track record of successful transactions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
                    alt="LuxuryEstate team"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Years of Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Properties Sold</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              What We Stand For
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our core values guide everything we do, from client interactions to property selection, ensuring we maintain the highest standards of service and integrity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We strive for excellence in every aspect of our service, never settling for anything less than exceptional.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We conduct business with unwavering integrity, ensuring transparency and honesty in every interaction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our deep knowledge of luxury real estate markets and property value ensures informed decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-900">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 dark:bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Dedication</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're dedicated to our clients' satisfaction, working tirelessly to exceed expectations at every turn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 bg-white dark:bg-slate-900" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Meet Our Expert Agents
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our team of experienced real estate professionals is dedicated to helping you find the perfect property or sell your current one at the best possible price.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {agents.map((agent) => (
              <div key={agent.id} id={`agent-${agent.id}`} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-1">{agent.name}</h3>
                  <p className="text-secondary text-sm mb-4">{agent.title}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <a href={`mailto:${agent.email}`} className="text-primary hover:text-secondary transition-colors">
                        {agent.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <a href={`tel:${agent.phone}`} className="text-primary hover:text-secondary transition-colors">
                        {agent.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-xs text-gray-500">{agent.experience} Years Exp.</span>
                    <div className="flex space-x-2">
                      {agent.socialMedia?.linkedin && (
                        <a href={`https://linkedin.com/in/${agent.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {agent.socialMedia?.twitter && (
                        <a href={`https://twitter.com/${agent.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {agent.socialMedia?.instagram && (
                        <a href={`https://instagram.com/${agent.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                      {agent.socialMedia?.facebook && (
                        <a href={`https://facebook.com/${agent.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                          <Facebook className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}