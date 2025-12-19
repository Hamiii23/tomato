"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import ProductDetailModal from "@/components/product-detail-modal";
import { products } from "@/lib/products";
import { Product } from "@/lib/types";
import { Search, Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setIsDark(dark);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter((p) => p.originalPrice);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div
        className={`relative ${isDark ? "bg-gradient-to-br from-purple-950 via-gray-900 to-gray-950" : "bg-gradient-to-br from-purple-50 via-white to-purple-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div
              className={`inline-flex items-center space-x-2 ${isDark ? "bg-purple-900/30 border-purple-700" : "bg-purple-100 border-purple-300"} border rounded-full px-4 py-2`}
            >
              <Sparkles
                className={`w-4 h-4 ${isDark ? "text-purple-400" : "text-purple-600"}`}
              />
              <span
                className={`text-sm font-medium ${isDark ? "text-purple-300" : "text-purple-700"}`}
              >
                New Arrivals 2025
              </span>
            </div>

            <div className="space-y-4">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Discover Your Style
              </h1>
              <p
                className={`text-xl md:text-2xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto`}
              >
                Premium products curated just for you
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search
                  className={`absolute left-5 top-1/2 transform -translate-y-1/2 ${isDark ? "text-purple-500" : "text-purple-400"} w-5 h-5`}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full ${isDark ? "bg-gray-900 border-purple-800 text-white placeholder-gray-500 focus:border-purple-600" : "bg-white border-purple-200 text-gray-900 placeholder-gray-400 focus:border-purple-400"} border rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-2 ${isDark ? "focus:ring-purple-600/50" : "focus:ring-purple-400/50"} transition-all shadow-sm`}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <span
                className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}
              >
                Popular:
              </span>
              {["Electronics", "Fashion", "Accessories"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-purple-800 hover:border-purple-700"
                      : "bg-white hover:bg-purple-50 text-gray-700 hover:text-purple-600 border border-purple-200 hover:border-purple-300"
                  }`}
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
          <div
            className={`${isDark ? "bg-gray-900/50" : "bg-white"} ${isDark ? "border-purple-900" : "border-purple-100"} border-y`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 p-2.5 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      Featured Deals
                    </h2>
                    <p
                      className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mt-0.5`}
                    >
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
          <h2
            className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-2`}
          >
            {selectedCategory === "All" ? "All Products" : selectedCategory}
          </h2>
          <p
            className={`${isDark ? "text-purple-400" : "text-purple-600"} font-medium`}
          >
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <div
              className={`${isDark ? "bg-gray-800" : "bg-purple-50"} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              <Search
                className={`w-12 h-12 ${isDark ? "text-purple-500" : "text-purple-300"}`}
              />
            </div>
            <h3
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-3`}
            >
              No products found
            </h3>
            <p
              className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg`}
            >
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
