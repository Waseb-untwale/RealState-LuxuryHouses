import React from 'react';
import { Award, Users, Home, TrendingUp, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Home, value: '50+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional luxury living experiences through premium real estate solutions that exceed our clients\' expectations.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be Mumbai\'s most trusted luxury real estate brand, known for quality, innovation, and unparalleled customer service.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, excellence, and customer-centricity guide everything we do. We believe in building lasting relationships through trust and transparency.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'With over 20 years in luxury real estate, Rajesh founded LuxuryHomes with a vision to redefine premium living in Mumbai.'
    },
    {
      name: 'Priya Patel',
      position: 'Head of Sales',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      description: 'Priya leads our sales team with expertise in luxury property marketing and client relationship management.'
    },
    {
      name: 'Amit Kumar',
      position: 'Design Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      description: 'Amit oversees all design and customization projects, ensuring each property meets our luxury standards.'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About LuxuryHomes</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 15 years, we've been Mumbai's premier luxury real estate company, 
            dedicated to helping discerning clients find their perfect homes in the city's 
            most prestigious locations.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded in 2008, LuxuryHomes began with a simple yet ambitious vision: to transform 
                  the luxury real estate landscape in Mumbai. What started as a small boutique firm 
                  has grown into one of the city's most respected real estate companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our journey has been marked by unwavering commitment to quality, innovation, and 
                  customer satisfaction. We've successfully delivered over 50 premium properties, 
                  each one a testament to our dedication to excellence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we continue to set new standards in luxury living, offering not just homes, 
                  but complete lifestyle experiences that reflect the aspirations and dreams of our clients.
                </p>
              </div>
            </div>

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

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core principles guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-800 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LuxuryHomes?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We're more than just a real estate company - we're your partners in finding the perfect luxury home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-blue-100">Every property meets the highest standards of luxury and craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-blue-100">Personalized service from experienced real estate professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
              <p className="text-blue-100">Properties in Mumbai's most prestigious and well-connected areas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;