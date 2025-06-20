import React from 'react';
import { 
  Car, 
  Shield, 
  Waves, 
  Dumbbell, 
  Zap, 
  Wifi, 
  TreePine, 
  Camera,
  Wind,
  Building,
  Users,
  Utensils
} from 'lucide-react';

const Amenities: React.FC = () => {
  const amenities = [
    {
      icon: Car,
      title: 'Covered Parking',
      description: 'Secure covered parking spaces for residents'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance'
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Premium swimming pool with aqua aerobics'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Fully equipped modern gymnasium'
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: '100% power backup for uninterrupted living'
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet connectivity'
    },
    {
      icon: TreePine,
      title: 'Landscaped Gardens',
      description: 'Beautiful green spaces and landscaping'
    },
    {
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'Complete building surveillance system'
    },
    {
      icon: Wind,
      title: 'Central AC/Heating',
      description: 'Climate controlled environment'
    },
    {
      icon: Building,
      title: 'Concierge Service',
      description: '24/7 concierge and maintenance support'
    },
    {
      icon: Users,
      title: 'Community Hall',
      description: 'Multi-purpose hall for events and gatherings'
    },
    {
      icon: Utensils,
      title: 'Modular Kitchen',
      description: 'Premium modular kitchen with modern appliances'
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of world-class amenities 
            designed to enhance your lifestyle
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <amenity.icon className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{amenity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Image Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Luxury Lifestyle Awaits
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every detail has been carefully planned to provide you with the ultimate 
                    luxury living experience. From the moment you step into our properties, 
                    you'll discover amenities that set new standards for premium living.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      <span>Premium quality materials and finishes</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      <span>Sustainable and eco-friendly features</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      <span>Smart home automation systems</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      <span>Dedicated maintenance and support team</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
                  alt="Luxury Amenities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;