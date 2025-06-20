import { Property } from '../types/Property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Penthouse',
    price: 15000000,
    location: 'Bandra West, Mumbai',
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    type: 'Penthouse',
    status: 'available',
    featured: true,
    customizable: true,
    images: [
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    ],
    description: 'Experience luxury living in this stunning 3BHK penthouse with panoramic city views. Features premium finishes, spacious balconies, and modern amenities.',
    amenities: [
      'Modular Kitchen',
      'Air Conditioning',
      'Covered Parking',
      '24/7 Security',
      'Swimming Pool',
      'Gym',
      'Terrace Garden',
      'Intercom',
      'Power Backup',
      'Lift'
    ],
    floorPlan: 'https://images.pexels.com/photos/8292795/pexels-photo-8292795.jpeg'
  },
  {
    id: '2',
    title: 'Premium 2BHK Apartment',
    price: 8500000,
    location: 'Andheri East, Mumbai',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: 'Apartment',
    status: 'available',
    featured: true,
    customizable: false,
    images: [
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg'
    ],
    description: 'Modern 2BHK apartment with contemporary design and prime location connectivity. Perfect for small families and professionals.',
    amenities: [
      'Modular Kitchen',
      'Air Conditioning',
      'Car Parking',
      'Security',
      'Gym',
      'Garden',
      'Intercom',
      'Power Backup'
    ]
  },
  {
    id: '3',
    title: 'Spacious 4BHK Villa',
    price: 25000000,
    location: 'Juhu, Mumbai',
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    type: 'Villa',
    status: 'available',
    customizable: true,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg'
    ],
    description: 'Luxurious 4BHK villa with private garden and premium amenities. Ideal for large families seeking comfort and privacy.',
    amenities: [
      'Private Garden',
      'Swimming Pool',
      'Modular Kitchen',
      'Air Conditioning',
      'Multiple Parking',
      '24/7 Security',
      'Gym',
      'Servant Room',
      'Power Backup',
      'Lift'
    ]
  },
  {
    id: '4',
    title: 'Elegant 1BHK Studio',
    price: 4500000,
    location: 'Powai, Mumbai',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: 'Studio',
    status: 'available',
    customizable: true,
    images: [
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    ],
    description: 'Compact yet elegant 1BHK studio apartment perfect for young professionals. Modern amenities in a prime location.',
    amenities: [
      'Modular Kitchen',
      'Air Conditioning',
      'Parking',
      'Security',
      'Gym',
      'Power Backup',
      'Intercom'
    ]
  },
  {
    id: '5',
    title: 'Designer 3BHK Duplex',
    price: 18500000,
    location: 'Worli, Mumbai',
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    type: 'Duplex',
    status: 'sold',
    customizable: false,
    images: [
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg'
    ],
    description: 'Stunning duplex apartment with designer interiors and sea-facing views. Premium location with excellent connectivity.',
    amenities: [
      'Sea View',
      'Designer Interiors',
      'Modular Kitchen',
      'Air Conditioning',
      'Covered Parking',
      '24/7 Security',
      'Swimming Pool',
      'Gym',
      'Power Backup'
    ]
  },
  {
    id: '6',
    title: 'Luxury 2BHK with Terrace',
    price: 12000000,
    location: 'Santacruz West, Mumbai',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    type: 'Apartment',
    status: 'reserved',
    customizable: true,
    images: [
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg'
    ],
    description: 'Beautiful 2BHK apartment with private terrace garden. Perfect blend of luxury and nature in the heart of the city.',
    amenities: [
      'Private Terrace',
      'Garden View',
      'Modular Kitchen',
      'Air Conditioning',
      'Car Parking',
      'Security',
      'Gym',
      'Power Backup'
    ]
  }
];