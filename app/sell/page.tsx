"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Upload } from 'lucide-react';

export default function SellPage() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    propertyType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    yearBuilt: '',
    askingPrice: '',
    name: '',
    email: '',
    phone: '',
    contactPreference: '',
    additionalInfo: '',
    agreeToTerms: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const nextStep = () => {
    setFormStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setFormStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Form submitted:', formData);
    nextStep();
  };

  return (
    <div>
      {/* Page Header */}
      <div 
        className="bg-cover bg-center py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 52, 96, 0.8), rgba(15, 52, 96, 0.8)), url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Sell Your Property</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Let our expert agents help you sell your property for the best possible price
          </p>
        </div>
      </div>
      
      {/* Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            {formStep < 3 && (
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      formStep >= 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {formStep > 0 ? <Check className="h-5 w-5" /> : '1'}
                    </div>
                    <div className="ml-3">
                      <span className={`font-medium ${formStep >= 0 ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
                        Property Details
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-1 w-16 bg-gray-200 dark:bg-gray-700">
                    <div className={`h-full bg-primary transition-all duration-300 ${
                      formStep > 0 ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      formStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {formStep > 1 ? <Check className="h-5 w-5" /> : '2'}
                    </div>
                    <div className="ml-3">
                      <span className={`font-medium ${formStep >= 1 ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
                        Contact Information
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-1 w-16 bg-gray-200 dark:bg-gray-700">
                    <div className={`h-full bg-primary transition-all duration-300 ${
                      formStep > 1 ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      formStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {formStep > 2 ? <Check className="h-5 w-5" /> : '3'}
                    </div>
                    <div className="ml-3">
                      <span className={`font-medium ${formStep >= 2 ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
                        Confirmation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Form Content */}
            {formStep === 0 && (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Property Details</h2>
                <form>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium mb-1">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                        required
                      >
                        <option value="">Select property type</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                        <option value="Villa">Villa</option>
                        <option value="Land">Land</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-1">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-1">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
                          Zip Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="bedrooms" className="block text-sm font-medium mb-1">
                          Bedrooms *
                        </label>
                        <input
                          type="number"
                          id="bedrooms"
                          name="bedrooms"
                          value={formData.bedrooms}
                          onChange={handleChange}
                          min="0"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="bathrooms" className="block text-sm font-medium mb-1">
                          Bathrooms *
                        </label>
                        <input
                          type="number"
                          id="bathrooms"
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleChange}
                          min="0"
                          step="0.5"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="squareFootage" className="block text-sm font-medium mb-1">
                          Square Footage *
                        </label>
                        <input
                          type="number"
                          id="squareFootage"
                          name="squareFootage"
                          value={formData.squareFootage}
                          onChange={handleChange}
                          min="0"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="yearBuilt" className="block text-sm font-medium mb-1">
                          Year Built
                        </label>
                        <input
                          type="number"
                          id="yearBuilt"
                          name="yearBuilt"
                          value={formData.yearBuilt}
                          onChange={handleChange}
                          min="1800"
                          max={new Date().getFullYear()}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="askingPrice" className="block text-sm font-medium mb-1">
                        Asking Price ($) *
                      </label>
                      <input
                        type="number"
                        id="askingPrice"
                        name="askingPrice"
                        value={formData.askingPrice}
                        onChange={handleChange}
                        min="0"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Property Photos
                      </label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          Drag and drop your photos here, or click to browse
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          (Maximum 10 photos, 5MB each)
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          multiple
                        />
                        <Button type="button" variant="outline" size="sm" className="mt-4">
                          Browse Files
                        </Button>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="button"
                        className="w-full"
                        onClick={nextStep}
                      >
                        Continue to Contact Information
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {formStep === 1 && (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <form>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contactPreference" className="block text-sm font-medium mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactPreference"
                        name="contactPreference"
                        value={formData.contactPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                      >
                        <option value="">Select preferred method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="text">Text Message</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700"
                        placeholder="Please share any additional information about your property that might be helpful (e.g., recent renovations, special features, etc.)"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start pt-2">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeToTerms" className="text-gray-600 dark:text-gray-300">
                          I agree to the <a href="#" className="text-primary hover:text-secondary">terms of service</a> and <a href="#" className="text-primary hover:text-secondary">privacy policy</a> *
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!formData.agreeToTerms}
                      >
                        Submit Property
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {formStep === 2 && (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-serif font-bold mb-4">Thank You!</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your property information has been successfully submitted. One of our expert agents will review your details and contact you within 24 hours to discuss the next steps in selling your property.
                </p>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Reference Number:</strong> PROP-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>
                <Button onClick={() => window.location.href = '/'}>
                  Return to Homepage
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}