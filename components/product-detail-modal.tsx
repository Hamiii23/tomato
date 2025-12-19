"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { X, ShoppingCart, Star, Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const { addToCart } = useCart();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setIsDark(dark);
  }, []);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className={`${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border rounded-2xl shadow-2xl max-w-4xl w-full my-8`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`flex items-center justify-between p-6 border-b ${isDark ? "border-purple-800 bg-gray-800" : "border-purple-200 bg-purple-50"}`}
          >
            <h2
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {product.name}
            </h2>
            <button
              onClick={onClose}
              className={`p-2 ${isDark ? "hover:bg-gray-700 text-gray-400 hover:text-white" : "hover:bg-purple-100 text-gray-600 hover:text-gray-900"} rounded-lg transition-colors`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`relative aspect-square rounded-xl overflow-hidden ${isDark ? "bg-gray-800 border-purple-800" : "bg-gray-100 border-purple-200"} border`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-purple-600 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      % OFF
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 ${isDark ? "bg-purple-900/50 text-purple-400" : "bg-purple-100 text-purple-700"} text-sm font-medium rounded-full`}
                    >
                      {product.category}
                    </span>
                    {product.inStock ? (
                      <span
                        className={`px-3 py-1 ${isDark ? "bg-green-900/50 text-green-400" : "bg-green-100 text-green-700"} text-sm font-medium rounded-full`}
                      >
                        In Stock
                      </span>
                    ) : (
                      <span
                        className={`px-3 py-1 ${isDark ? "bg-red-900/50 text-red-400" : "bg-red-100 text-red-700"} text-sm font-medium rounded-full`}
                      >
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-500 text-yellow-500"
                              : isDark
                                ? "text-gray-700"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span
                      className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
                    >
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <p
                  className={`${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
                >
                  {product.description}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="space-y-3">
                    <h3
                      className={`font-semibold ${isDark ? "text-white" : "text-gray-900"} text-lg`}
                    >
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start space-x-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                        >
                          <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div
                  className={`border-t ${isDark ? "border-purple-800" : "border-purple-200"} pt-6 space-y-4`}
                >
                  <div className="flex items-end space-x-4">
                    {product.originalPrice && (
                      <div
                        className={`text-lg ${isDark ? "text-gray-500" : "text-gray-500"} line-through`}
                      >
                        ₹{product.originalPrice.toFixed(2)}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-purple-600">
                      ₹{product.price.toFixed(2)}
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
