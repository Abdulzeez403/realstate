import Link from 'next/link';
import { Agent } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users, Home, Award, ArrowRight } from 'lucide-react';
import { agents } from '@/data/agents';

interface AboutSectionProps {
  featuredAgents?: Agent[];
}

const AboutSection = ({ featuredAgents = agents.slice(0, 2) }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg"
                alt="Our team of experts"
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
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Expert Agents</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              About LuxuryEstate
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Your Trusted Partner in Finding Exceptional Properties
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              LuxuryEstate has been the premier destination for luxury real estate since 2005. Our mission is to connect discerning clients with extraordinary properties that meet their unique lifestyle needs and investment goals.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              With a team of experienced agents specializing in various property types and locations, we provide personalized service and in-depth market knowledge to ensure a seamless real estate experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="bg-transparent">
                <CardContent className="p-4 flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-4">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Expert Agents</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Highly trained professionals with specialized market knowledge
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-transparent">
                <CardContent className="p-4 flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-4">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Exclusive Listings</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Access to premium properties often not available elsewhere
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-transparent">
                <CardContent className="p-4 flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-4">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Personalized Service</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tailored approach to meet your specific real estate needs
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-transparent">
                <CardContent className="p-4 flex items-start">
                  <div className="rounded-full bg-primary/10 p-2 mr-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Award-Winning</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Recognized excellence in luxury real estate services
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Link href="/about">
              <Button variant="default" className="bg-primary hover:bg-primary-light">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Agents */}
        {featuredAgents && featuredAgents.length > 0 && (
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Meet Our Featured Agents
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300">
                Our team of experienced agents is dedicated to helping you find the perfect property or sell your current one for the best price.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredAgents.map((agent) => (
                <Card key={agent.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5 text-center">
                    <h3 className="font-serif font-bold text-lg mb-1">{agent.name}</h3>
                    <p className="text-secondary text-sm mb-2">{agent.title}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{agent.phone}</p>
                    <Link href={`/about#agent-${agent.id}`}>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;