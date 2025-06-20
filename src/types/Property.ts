export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  status: 'available' | 'sold' | 'reserved';
  images: string[];
  description: string;
  amenities: string[];
  floorPlan?: string;
  customizable?: boolean;
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
}