"use client";

import { ShoppingCart, User, Menu, X, Store, Moon, Sun } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useState, useEffect } from "react";
import Link from "next/link";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
  "Home",
  "Sports",
];

interface NavbarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Navbar({
  selectedCategory,
  onCategoryChange,
}: NavbarProps) {
  const { totalItems, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("darkMode", String(newDark));
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.location.reload();
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border-b shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-700 transition-colors">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-purple-600">
                Toomatoo
              </span>
            </Link>

            <div className="hidden md:flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : isDark
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"} rounded-lg transition-colors`}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={openCart}
              className={`relative p-2 ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"} rounded-lg transition-colors`}
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center space-x-2 p-2 ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"} rounded-lg transition-colors`}
              >
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </button>

              {isProfileOpen && (
                <div
                  className={`absolute right-0 mt-2 w-48 ${isDark ? "bg-gray-800 border-purple-800" : "bg-white border-purple-200"} border rounded-lg shadow-lg overflow-hidden`}
                >
                  <Link
                    href="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className={`block px-4 py-3 text-sm ${isDark ? "text-gray-300 hover:bg-gray-700 hover:text-white border-purple-800" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 border-purple-100"} transition-colors border-b`}
                  >
                    My Profile
                  </Link>
                  <button
                    className={`w-full text-left px-4 py-3 text-sm ${isDark ? "text-gray-300 hover:bg-gray-700 hover:text-white border-purple-800" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600 border-purple-100"} transition-colors border-b`}
                  >
                    Settings
                  </button>
                  <button
                    className={`w-full text-left px-4 py-3 text-sm ${isDark ? "text-gray-300 hover:bg-gray-700 hover:text-white" : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"} transition-colors`}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"} rounded-lg transition-colors`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden py-4 space-y-2 border-t ${isDark ? "border-purple-800" : "border-purple-100"}`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
