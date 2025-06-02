import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(15, 52, 96, 0.85), rgba(15, 52, 96, 0.85)), url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg')"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking to buy, sell, or rent, our team of expert agents is here to help you navigate the luxury real estate market with ease.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-primary min-w-[180px]">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/properties">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 min-w-[180px]">
                Browse Properties
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <a 
              href="https://wa.me/11234567890" 
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center text-white hover:text-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;