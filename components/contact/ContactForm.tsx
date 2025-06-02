"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({
      name,
      email,
      phone,
      subject,
      message,
    });
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 5000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-medium text-green-800 dark:text-green-300">Message Sent</h3>
              <div className="mt-2 text-green-700 dark:text-green-400">
                <p>Thank you for contacting us! We will get back to you as soon as possible.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name *
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
                Email Address *
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
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject *
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                required
              >
                <option value="">Select a subject</option>
                <option value="Property Inquiry">Property Inquiry</option>
                <option value="Selling My Property">Selling My Property</option>
                <option value="Schedule a Viewing">Schedule a Viewing</option>
                <option value="Career Opportunities">Career Opportunities</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                required
              ></textarea>
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full bg-primary hover:bg-primary-light">
                Send Message
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;