import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and superior sound quality.",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://images.pexels.com/photos/5974011/pexels-photo-5974011.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Electronics",
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour Battery",
      "Wireless Bluetooth 5.0",
      "Premium Sound Quality",
    ],
  },
  {
    id: "2",
    name: "Minimalist Leather Wallet",
    description:
      "Handcrafted genuine leather wallet with RFID protection. Slim design fits perfectly in your pocket.",
    price: 49.99,
    image:
      "https://images.pexels.com/photos/4452398/pexels-photo-4452398.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories",
    rating: 4.6,
    reviews: 1523,
    inStock: true,
    features: [
      "Genuine Leather",
      "RFID Protection",
      "Slim Design",
      "Multiple Card Slots",
    ],
  },
  {
    id: "3",
    name: "Smart Watch Pro",
    description:
      "Advanced fitness tracking, heart rate monitoring, GPS, and smartphone notifications. Water resistant up to 50m.",
    price: 399.99,
    originalPrice: 499.99,
    image:
      "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Electronics",
    rating: 4.7,
    reviews: 3912,
    inStock: true,
    features: [
      "Fitness Tracking",
      "Heart Rate Monitor",
      "GPS",
      "Water Resistant",
    ],
  },
  {
    id: "4",
    name: "Classic Cotton T-Shirt",
    description:
      "Soft, breathable 100% organic cotton t-shirt. Perfect fit and ultimate comfort for everyday wear.",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fashion",
    rating: 4.5,
    reviews: 892,
    inStock: true,
    features: [
      "100% Organic Cotton",
      "Breathable Fabric",
      "Machine Washable",
      "Available in Multiple Colors",
    ],
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    description:
      "UV400 protection polarized lenses in a stylish acetate frame. Includes premium case and cleaning cloth.",
    price: 159.99,
    originalPrice: 229.99,
    image:
      "https://images.pexels.com/photos/1532244/pexels-photo-1532244.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories",
    rating: 4.9,
    reviews: 1247,
    inStock: true,
    features: [
      "UV400 Protection",
      "Polarized Lenses",
      "Acetate Frame",
      "Includes Premium Case",
    ],
  },
  {
    id: "6",
    name: "Wireless Mechanical Keyboard",
    description:
      "Premium mechanical keyboard with customizable RGB lighting, hot-swappable switches, and dual wireless modes.",
    price: 179.99,
    image:
      "https://images.pexels.com/photos/18311093/pexels-photo-18311093.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Electronics",
    rating: 4.8,
    reviews: 2156,
    inStock: true,
    features: [
      "Mechanical Switches",
      "RGB Lighting",
      "Wireless",
      "Hot-Swappable",
    ],
  },
  {
    id: "7",
    name: "Denim Jacket",
    description:
      "Vintage-inspired denim jacket with a modern fit. Durable construction and timeless style.",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/2344601/pexels-photo-2344601.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fashion",
    rating: 4.6,
    reviews: 743,
    inStock: true,
    features: [
      "100% Cotton Denim",
      "Classic Fit",
      "Button Closure",
      "Multiple Pockets",
    ],
  },
  {
    id: "8",
    name: "Ceramic Coffee Mug Set",
    description:
      "Set of 4 handcrafted ceramic mugs. Microwave and dishwasher safe. Perfect for coffee or tea lovers.",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/16576807/pexels-photo-16576807.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Home",
    rating: 4.7,
    reviews: 524,
    inStock: true,
    features: [
      "Set of 4",
      "Handcrafted Ceramic",
      "Microwave Safe",
      "Dishwasher Safe",
    ],
  },
  {
    id: "9",
    name: "Portable Bluetooth Speaker",
    description:
      "360-degree sound, 20-hour battery life, waterproof design perfect for outdoor adventures.",
    price: 79.99,
    originalPrice: 119.99,
    image:
      "https://images.pexels.com/photos/4430950/pexels-photo-4430950.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Electronics",
    rating: 4.5,
    reviews: 1834,
    inStock: true,
    features: [
      "360° Sound",
      "20-hour Battery",
      "Waterproof",
      "Portable Design",
    ],
  },
  {
    id: "10",
    name: "Leather Crossbody Bag",
    description:
      "Elegant crossbody bag made from premium leather. Adjustable strap and multiple compartments.",
    price: 129.99,
    image:
      "https://images.pexels.com/photos/15568697/pexels-photo-15568697.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories",
    rating: 4.8,
    reviews: 967,
    inStock: true,
    features: [
      "Premium Leather",
      "Adjustable Strap",
      "Multiple Compartments",
      "Elegant Design",
    ],
  },
  {
    id: "11",
    name: "Running Sneakers",
    description:
      "Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.",
    price: 119.99,
    image:
      "https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Fashion",
    rating: 4.7,
    reviews: 2103,
    inStock: true,
    features: [
      "Responsive Cushioning",
      "Breathable Mesh",
      "Lightweight",
      "Durable Sole",
    ],
  },
  {
    id: "12",
    name: "Minimalist Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness and color temperature. Modern design with touch controls.",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Home",
    rating: 4.6,
    reviews: 689,
    inStock: true,
    features: [
      "LED Technology",
      "Adjustable Brightness",
      "Touch Controls",
      "Modern Design",
    ],
  },
];
