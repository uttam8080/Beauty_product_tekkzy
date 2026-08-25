export type ProductCategory = 'makeup' | 'skincare' | 'haircare' | 'body';

export interface ProductShade {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  skinType?: string;
  shade?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  hoverImage: string;
  description: string;
  benefits: string[];
  ingredients: string;
  howToUse: string;
  skinType: string[]; // e.g. ['All', 'Dry', 'Oily', 'Sensitive', 'Combination']
  concerns: string[]; // e.g. ['Hydration', 'Glow', 'Anti-Aging', 'Texture', 'Blemishes']
  shades?: ProductShade[];
  badge?: 'Best Seller' | 'New' | 'Award Winner' | 'Limited Edition' | 'Clean Pick';
  inStock: boolean;
  volume?: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedShade?: ProductShade;
}

export interface FilterState {
  category: string;
  subcategory: string;
  priceRange: [number, number];
  skinTypes: string[];
  concerns: string[];
  rating: number;
  inStockOnly: boolean;
  sortBy: 'featured' | 'newest' | 'price-low' | 'price-high' | 'rating';
  searchQuery: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  productName: string;
  rating: number;
  avatar?: string;
}

export interface RoutineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  productId: string;
  visualImage: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'cart';
  productImage?: string;
}
