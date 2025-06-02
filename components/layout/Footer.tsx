import Link from 'next/link';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8" />
              <span className="ml-2 text-2xl font-serif font-bold">LuxuryEstate</span>
            </div>
            <p className="text-gray-300 mb-6">
              Finding exceptional properties for exceptional people since 2005. Your trusted partner in luxury real estate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties?type=all" className="text-gray-300 hover:text-secondary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/properties?type=sale" className="text-gray-300 hover:text-secondary transition-colors">
                  For Sale
                </Link>
              </li>
              <li>
                <Link href="/properties?type=rent" className="text-gray-300 hover:text-secondary transition-colors">
                  For Rent
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-secondary" />
                <span className="text-gray-300">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary" />
                <a href="mailto:info@luxuryestate.com" className="text-gray-300 hover:text-white transition-colors">
                  info@luxuryestate.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest property listings and real estate news.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary text-primary-foreground rounded-md font-medium hover:bg-secondary-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LuxuryEstate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;