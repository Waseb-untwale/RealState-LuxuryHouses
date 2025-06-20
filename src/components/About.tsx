import React from 'react';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Home, value: '50+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose LuxuryHomes?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over 15 years of experience in Mumbai's premium real estate market, 
                we have established ourselves as the trusted partner for luxury property 
                investments. Our commitment to excellence and personalized service has 
                made us the preferred choice for discerning clients.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                  <p className="text-gray-600">
                    Every property in our portfolio meets the highest standards of luxury and quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">
                    Our experienced team provides personalized advice and support throughout your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Locations</h3>
                  <p className="text-gray-600">
                    All our properties are strategically located in Mumbai's most sought-after areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
                alt="Luxury Building"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <stat.icon className="h-8 w-8 text-blue-800 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;