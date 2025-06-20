import React from 'react';
import { ArrowRight, MapPin, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-800">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">Premium Real Estate</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your
                <span className="text-blue-800 block">Dream Home</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover luxury living in Mumbai's most prestigious locations. 
                Our collection of premium flats offers unmatched comfort, style, and convenience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProperties}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-200 transform hover:scale-105"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-800 text-blue-800 font-semibold rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-200"
              >
                Contact Us
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                alt="Luxury Property"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Property Card Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 max-w-sm">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg"
                  alt="Featured Property"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Luxury Penthouse</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    Bandra West
                  </div>
                  <div className="text-blue-800 font-bold mt-1">₹1.5 Cr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;