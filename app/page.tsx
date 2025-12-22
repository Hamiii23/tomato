"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import ProductDetailModal from "@/components/product-detail-modal";
import { products } from "@/lib/products";
import { Product } from "@/lib/types";
import {
  Search,
  Sparkles,
  TrendingUp,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const featuredProducts = products.filter((p) => p.originalPrice);

  const resetPriceFilter = () => {
    setPriceRange([0, 50000]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="relative bg-gradient-to-br from-purple-50 via-background to-purple-50 dark:from-purple-950/20 dark:via-background dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                New Arrivals 2025
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Discover Your Style
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Premium products curated just for you
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-purple-400 dark:text-purple-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card border border-border text-foreground placeholder-muted-foreground rounded-2xl pl-14 pr-20 py-4 focus:outline-none focus:ring-2 focus:ring-ring transition-all shadow-sm"
                />
                <button
                  onClick={() => setShowPriceFilter(!showPriceFilter)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-muted transition-colors"
                  title="Filter by price"
                >
                  <SlidersHorizontal className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </button>
              </div>

              {showPriceFilter && (
                <div className="mt-4 bg-card border border-border rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">
                      Price Range
                    </h3>
                    <button
                      onClick={() => setShowPriceFilter(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Min: ₹{priceRange[0].toLocaleString("en-IN")}
                      </span>
                      <span className="text-muted-foreground">
                        Max: ₹{priceRange[1].toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="500"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            Math.min(
                              parseInt(e.target.value),
                              priceRange[1] - 500,
                            ),
                            priceRange[1],
                          ])
                        }
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="500"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            Math.max(
                              parseInt(e.target.value),
                              priceRange[0] + 500,
                            ),
                          ])
                        }
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1 block">
                          Min Price (₹)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max={priceRange[1] - 500}
                          step="100"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([
                              Math.max(
                                0,
                                Math.min(
                                  parseInt(e.target.value) || 0,
                                  priceRange[1] - 500,
                                ),
                              ),
                              priceRange[1],
                            ])
                          }
                          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1 block">
                          Max Price (₹)
                        </label>
                        <input
                          type="number"
                          min={priceRange[0] + 500}
                          max="50000"
                          step="100"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([
                              priceRange[0],
                              Math.min(
                                50000,
                                Math.max(
                                  parseInt(e.target.value) || 50000,
                                  priceRange[0] + 500,
                                ),
                              ),
                            ])
                          }
                          className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <button
                      onClick={resetPriceFilter}
                      className="w-full mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Reset Price Filter
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Electronics", "Fashion", "Accessories"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-card hover:bg-muted text-foreground border border-border hover:border-ring"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {featuredProducts.length > 0 &&
        selectedCategory === "All" &&
        !searchQuery && (
          <div className="bg-card/50 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary p-2.5 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      Featured Deals
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Limited time offers
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.slice(0, 4).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={setSelectedProduct}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <p className="text-primary font-medium">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              No products found
            </h3>
            <p className="text-muted-foreground text-lg">
              Try adjusting your search or filter
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
