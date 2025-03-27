import { Location } from './location';

export interface Home {
  title: string;
  description: string;
  price: number;
  status: 'For-Sale' | 'Sold';
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  features: string[];
  coverImage: string;
  images: string[];
  location: Location;
}
