import { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | LuxuryEstate',
  description: 'Get in touch with our real estate experts',
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <div 
        className="bg-cover bg-center py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 52, 96, 0.8), rgba(15, 52, 96, 0.8)), url('https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have a question or need assistance? Our team of experts is here to help you.
          </p>
        </div>
      </div>
      
      {/* Contact Details */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-serif font-bold mb-6">
                  We'd Love to Hear from You
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Whether you're looking to buy, sell, or have questions about our services, our team is ready to assist you.
                </p>
                
                <ContactForm />
              </div>
              
              {/* Contact Info & Map */}
              <div>
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Office Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Luxury Lane<br />
                      Beverly Hills, CA 90210<br />
                      United States
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      General Inquiries:<br />
                      <a href="mailto:info@luxuryestate.com" className="text-primary hover:text-secondary transition-colors">
                        info@luxuryestate.com
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Sales Department:<br />
                      <a href="mailto:sales@luxuryestate.com" className="text-primary hover:text-secondary transition-colors">
                        sales@luxuryestate.com
                      </a>
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Main Office:<br />
                      <a href="tel:+11234567890" className="text-primary hover:text-secondary transition-colors">
                        +1 (123) 456-7890
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Customer Support:<br />
                      <a href="tel:+11234567891" className="text-primary hover:text-secondary transition-colors">
                        +1 (123) 456-7891
                      </a>
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary mb-4" />
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday:<br />
                      9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Saturday:<br />
                      10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                {/* WhatsApp Card */}
                <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md mb-12 flex items-center">
                  <div className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#25D366" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" fill="#fff" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" fill="#fff" />
                      <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" fill="#fff" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Connect on WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Get quick responses to your inquiries through our WhatsApp business account.
                    </p>
                    <a
                      href="https://wa.me/11234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Start Chat
                    </a>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-[300px] bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-medium mb-2">Our Office Location</p>
                    <p className="text-gray-500 dark:text-gray-400">123 Luxury Lane, Beverly Hills, CA 90210</p>
                    <p className="mt-4 text-sm">
                      Interactive map would be displayed here in a production environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}