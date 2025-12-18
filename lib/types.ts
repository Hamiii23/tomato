export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "Electronics" | "Fashion" | "Accessories" | "Home";
  rating: number;
  reviews: number;
  inStock: boolean;
  features?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
