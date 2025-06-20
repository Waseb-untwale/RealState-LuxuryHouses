import React from 'react';
import { 
  Car, Shield, Waves, Dumbbell, Zap, Wifi, TreePine, Camera,
  Wind, Building, Users, Utensils, Home, Sparkles, Lock, Leaf
} from 'lucide-react';
import { TrendingUp } from "lucide-react";


const Features: React.FC = () => {
  const features = [
    {
      icon: Car,
      title: 'Covered Parking',
      description: 'Secure covered parking spaces for residents with 24/7 surveillance',
      category: 'Security & Convenience'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security with trained personnel and CCTV surveillance',
      category: 'Security & Convenience'
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Premium swimming pool with aqua aerobics and poolside relaxation area',
      category: 'Recreation & Wellness'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'Fully equipped modern gymnasium with latest fitness equipment',
      category: 'Recreation & Wellness'
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: '100% power backup for uninterrupted living with diesel generators',
      category: 'Utilities & Infrastructure'
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet connectivity throughout the building',
      category: 'Utilities & Infrastructure'
    },
    {
      icon: TreePine,
      title: 'Landscaped Gardens',
      description: 'Beautiful green spaces and professionally maintained landscaping',
      category: 'Environment & Aesthetics'
    },
    {
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'Complete building surveillance system with monitoring room',
      category: 'Security & Convenience'
    },
    {
      icon: Wind,
      title: 'Central AC/Heating',
      description: 'Climate controlled environment with energy-efficient systems',
      category: 'Comfort & Luxury'
    },
    {
      icon: Building,
      title: 'Concierge Service',
      description: '24/7 concierge and maintenance support for all residents',
      category: 'Services & Support'
    },
    {
      icon: Users,
      title: 'Community Hall',
      description: 'Multi-purpose hall for events, gatherings, and celebrations',
      category: 'Recreation & Wellness'
    },
    {
      icon: Utensils,
      title: 'Modular Kitchen',
      description: 'Premium modular kitchen with modern appliances and fixtures',
      category: 'Comfort & Luxury'
    },
    {
      icon: Home,
      title: 'Smart Home Features',
      description: 'Automated lighting, temperature control, and security systems',
      category: 'Technology & Innovation'
    },
    {
      icon: Sparkles,
      title: 'Premium Finishes',
      description: 'High-quality materials and finishes throughout the property',
      category: 'Comfort & Luxury'
    },
    {
      icon: Lock,
      title: 'Biometric Access',
      description: 'Advanced biometric access control for enhanced security',
      category: 'Technology & Innovation'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Design',
      description: 'Sustainable building practices and energy-efficient systems',
      category: 'Environment & Aesthetics'
    }
  ];

  const categories = [
    'All Features',
    'Security & Convenience',
    'Recreation & Wellness',
    'Comfort & Luxury',
    'Utilities & Infrastructure',
    'Technology & Innovation',
    'Environment & Aesthetics',
    'Services & Support'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Features');

  const filteredFeatures = selectedCategory === 'All Features' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Premium Features & Amenities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of world-class amenities 
            designed to enhance your lifestyle and provide unmatched comfort
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-800 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                <span className="text-sm text-blue-800 font-medium">{feature.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Features Matter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Features Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every amenity is carefully selected to enhance your daily life and provide lasting value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced security systems and 24/7 monitoring ensure your family's safety and peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury & Comfort</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium finishes and modern amenities create an environment of unparalleled luxury and comfort.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium amenities enhance property value and ensure strong returns on your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenity Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden">
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
      </section>
    </div>
  );
};

export default Features;