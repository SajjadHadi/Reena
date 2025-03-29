export interface Home {
  $id?: string;
  userId: string;
  title: string;
  description: string;
  price: number;
  status: 'For-Sale' | 'Sold';
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  features?: string[];
  coverImage: string;
  image?: string[];
  city: string;
  country: string;
  zipcode?: string;
}
