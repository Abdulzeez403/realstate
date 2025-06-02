"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Building, Users, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-slate-900 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Building className="h-8 w-8 text-primary" />
            <span className={`ml-2 text-2xl font-serif font-bold ${isScrolled || isOpen ? 'text-primary' : 'text-white'}`}>
              LuxuryEstate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              <span className="flex items-center">
                <Home className="mr-1 h-4 w-4" />
                Home
              </span>
            </Link>
            <div className="relative group">
              <button className={`flex items-center font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                <Building className="mr-1 h-4 w-4" />
                Properties
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/properties?type=all" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                  All Properties
                </Link>
                <Link href="/properties?type=sale" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                  For Sale
                </Link>
                <Link href="/properties?type=rent" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                  For Rent
                </Link>
              </div>
            </div>
            <Link href="/about" className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              <span className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                About Us
              </span>
            </Link>
            <Link href="/contact" className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              <span className="flex items-center">
                <Phone className="mr-1 h-4 w-4" />
                Contact
              </span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="secondary" className="font-medium">
              Sell Your Property
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Home
              </span>
            </Link>
            <Link
              href="/properties?type=all"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                <Building className="mr-2 h-5 w-5" />
                All Properties
              </span>
            </Link>
            <Link
              href="/properties?type=sale"
              className="block pl-10 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              For Sale
            </Link>
            <Link
              href="/properties?type=rent"
              className="block pl-10 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              For Rent
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                About Us
              </span>
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact
              </span>
            </Link>
            <div className="px-3 py-3">
              <Button variant="secondary" className="w-full font-medium">
                Sell Your Property
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;