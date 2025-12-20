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
      className="group cursor-pointer"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-ring transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-3 left-3">
              <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                SALE
              </div>
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/50 flex items-center justify-center backdrop-blur-sm">
              <span className="text-foreground font-semibold text-lg">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-card-foreground">
                {product.rating}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              {product.originalPrice && (
                <div className="text-xs text-muted-foreground line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </div>
              )}
              <div className="text-xl font-bold text-primary">
                ₹{product.price.toFixed(2)}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-primary hover:opacity-90 text-primary-foreground px-4 py-2 rounded-lg transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
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
