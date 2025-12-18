"use client";

import { Product } from "@/lib/types";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            SALE
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-white group-hover:text-teal-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-slate-400 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-medium text-white">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-slate-500">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            {product.originalPrice && (
              <div className="text-xs text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </div>
            )}
            <div className="text-xl font-bold text-teal-400">
              ${product.price.toFixed(2)}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
