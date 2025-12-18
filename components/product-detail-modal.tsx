"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";
import { X, ShoppingCart, Star, Check } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const { addToCart } = useCart();

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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-teal-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    % OFF
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                    {product.inStock ? (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                        In Stock
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">
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
                              : "text-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-400 text-sm">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {product.description}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-white text-lg">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-slate-300"
                        >
                          <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="border-t border-slate-800 pt-6 space-y-4">
                  <div className="flex items-end space-x-4">
                    {product.originalPrice && (
                      <div className="text-lg text-slate-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-teal-400">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50"
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
