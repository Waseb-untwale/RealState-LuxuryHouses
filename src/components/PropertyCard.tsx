import React from 'react';
import { MapPin, Bed, Bath, Square, Star, Eye } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      case 'reserved':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(property.status)}`}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
          {property.featured && (
            <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Featured
            </span>
          )}
        </div>
        {property.customizable && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Customizable
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
          <span className="text-2xl font-bold text-blue-800">
            {formatPrice(property.price)}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between mb-6 text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.area} sq ft</span>
          </div>
        </div>

        <button
          onClick={() => onViewDetails(property)}
          className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold flex items-center justify-center"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;