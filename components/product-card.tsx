"use client";

import { Product } from "@/lib/types";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setIsDark(dark);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group cursor-pointer"
    >
      <div
        className={`${isDark ? "bg-gray-800 border-purple-800" : "bg-white border-purple-200"} border rounded-xl overflow-hidden ${isDark ? "hover:border-purple-700" : "hover:border-purple-400"} transition-all duration-300 hover:shadow-lg`}
      >
        <div
          className={`relative aspect-square overflow-hidden ${isDark ? "bg-gray-700" : "bg-gray-100"}`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-3 left-3">
              <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                SALE
              </div>
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <h3
              className={`font-semibold ${isDark ? "text-white group-hover:text-purple-400" : "text-gray-900 group-hover:text-purple-600"} transition-colors line-clamp-1`}
            >
              {product.name}
            </h3>
            <p
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} line-clamp-2`}
            >
              {product.description}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span
                className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {product.rating}
              </span>
            </div>
            <span
              className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
            >
              ({product.reviews} reviews)
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              {product.originalPrice && (
                <div
                  className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"} line-through`}
                >
                  ₹{product.originalPrice.toFixed(2)}
                </div>
              )}
              <div className="text-xl font-bold text-purple-600">
                ₹{product.price.toFixed(2)}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
