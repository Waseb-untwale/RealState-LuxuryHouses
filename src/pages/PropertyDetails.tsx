import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Phone, Mail, Star } from 'lucide-react';
import { properties } from '../data/properties';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!property) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
        <Link to="/properties" className="text-blue-800 hover:underline">
          Back to Properties
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm interested in ${property.title} (₹${formatPrice(property.price)}) located at ${property.location}.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919823732171?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setShowContactForm(false);
  };

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${property.title} (₹${formatPrice(property.price)}) located at ${property.location}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919823732171?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/properties"
          className="inline-flex items-center text-blue-800 hover:text-blue-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Properties
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  {formatPrice(property.price)}
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  property.status === 'available' ? 'bg-green-100 text-green-800' :
                  property.status === 'sold' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-64 lg:h-96 object-cover rounded-lg"
                  />
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                  {property.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Featured
                      </span>
                    </div>
                  )}
                  {property.customizable && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Customizable
                      </span>
                    </div>
                  )}
                </div>

                {/* Thumbnail navigation */}
                {property.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          currentImageIndex === index
                            ? 'border-blue-800'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="h-8 w-8 mx-auto mb-2 text-blue-800" />
                    <div className="font-semibold text-xl">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="h-8 w-8 mx-auto mb-2 text-blue-800" />
                    <div className="font-semibold text-xl">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="h-8 w-8 mx-auto mb-2 text-blue-800" />
                    <div className="font-semibold text-xl">{property.area}</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                {property.customizable && (
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-800 mb-2">Customization Available</h3>
                    <p className="text-sm text-yellow-700">
                      This property offers customization options for layout and interior design. 
                      Contact us to discuss your requirements.
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact via WhatsApp
                  </button>
                  
                  <button
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-900 transition-colors font-semibold flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send Inquiry
                  </button>
                </div>

                {/* Contact Form */}
                {showContactForm && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">Send Inquiry</h3>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
                      >
                        Send to WhatsApp
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;