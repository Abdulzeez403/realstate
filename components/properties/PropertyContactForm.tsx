"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check } from 'lucide-react';

interface PropertyContactFormProps {
  propertyId: string;
  propertyTitle: string;
}

const PropertyContactForm = ({ propertyId, propertyTitle }: PropertyContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`I'm interested in this property (${propertyTitle}). Please contact me with more information.`);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({
      propertyId,
      name,
      email,
      phone,
      message,
      viewingDate: date,
    });
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage(`I'm interested in this property (${propertyTitle}). Please contact me with more information.`);
      setDate(undefined);
    }, 5000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-serif font-bold mb-6">Interested in this property?</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Request Sent</h3>
              <div className="mt-2 text-sm text-green-700 dark:text-green-400">
                <p>Thank you for your interest! One of our agents will contact you shortly.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Schedule Viewing (Optional)
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span className="text-gray-500 dark:text-gray-400">Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                required
              ></textarea>
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full bg-primary hover:bg-primary-light">
                Request Information
              </Button>
            </div>
            
            <div className="pt-3">
              <Button type="button" variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                Book Viewing
              </Button>
            </div>
          </div>
        </form>
      )}
      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <a
          href="https://wa.me/11234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-green-600 hover:text-green-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
          </svg>
          Contact us via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PropertyContactForm;