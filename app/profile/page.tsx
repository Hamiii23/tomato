"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Package,
  Heart,
  Settings,
  ChevronRight,
} from "lucide-react";

const dummyUser = {
  name: "Irfan Habib",
  email: "irfanhabib@example.com",
  phone: "+91 5551 234 567",
  address: "123 Modern Street, Tech City, TC 12345",
  joinDate: "January 2023",
  avatar: "IH",
};

const orderHistory = [
  {
    id: "ORD-001",
    date: "Dec 10, 2024",
    total: 299.99,
    status: "Delivered",
    items: 2,
  },
  {
    id: "ORD-002",
    date: "Nov 28, 2024",
    total: 159.99,
    status: "Delivered",
    items: 1,
  },
  {
    id: "ORD-003",
    date: "Nov 15, 2024",
    total: 449.97,
    status: "Delivered",
    items: 3,
  },
];

export default function ProfilePage() {
  const [selectedCategory] = useState("All");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setIsDark(dark);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-950" : "bg-gray-50"}`}>
      <Navbar selectedCategory={selectedCategory} onCategoryChange={() => {}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div
              className={`${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border rounded-xl p-6 space-y-6 shadow-sm`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {dummyUser.avatar}
                </div>
                <h2
                  className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {dummyUser.name}
                </h2>
                <p className="text-purple-600 mt-1 font-medium">
                  Premium Member
                </p>
              </div>

              <div
                className={`space-y-3 pt-4 border-t ${isDark ? "border-purple-800" : "border-purple-100"}`}
              >
                <div className="flex items-start space-x-3 text-sm">
                  <Mail className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {dummyUser.email}
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Phone className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {dummyUser.phone}
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {dummyUser.address}
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Calendar className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    Member since {dummyUser.joinDate}
                  </span>
                </div>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 font-semibold">
                <Settings className="w-5 h-5" />
                <span>Edit Profile</span>
              </button>
            </div>

            <div
              className={`${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border rounded-xl p-6 shadow-sm`}
            >
              <h3
                className={`font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-4`}
              >
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button
                  className={`w-full flex items-center justify-between p-3 rounded-lg ${isDark ? "hover:bg-gray-800 text-gray-300 hover:text-white" : "hover:bg-purple-50 text-gray-700 hover:text-purple-600"} transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-purple-600" />
                    <span>My Orders</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  className={`w-full flex items-center justify-between p-3 rounded-lg ${isDark ? "hover:bg-gray-800 text-gray-300 hover:text-white" : "hover:bg-purple-50 text-gray-700 hover:text-purple-600"} transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-purple-600" />
                    <span>Wishlist</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  className={`w-full flex items-center justify-between p-3 rounded-lg ${isDark ? "hover:bg-gray-800 text-gray-300 hover:text-white" : "hover:bg-purple-50 text-gray-700 hover:text-purple-600"} transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-purple-600" />
                    <span>Settings</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div
              className={`${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border rounded-xl p-6 shadow-sm`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Order History
                </h3>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className={`${isDark ? "bg-gray-800 border-purple-800" : "bg-purple-50 border-purple-200"} border rounded-lg p-4 ${isDark ? "hover:border-purple-700" : "hover:border-purple-300"} transition-colors`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                          >
                            {order.id}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === "Delivered"
                                ? isDark
                                  ? "bg-green-900/50 text-green-400"
                                  : "bg-green-100 text-green-700"
                                : isDark
                                  ? "bg-yellow-900/50 text-yellow-400"
                                  : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div
                          className={`flex items-center space-x-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{order.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Package className="w-4 h-4" />
                            <span>
                              {order.items}{" "}
                              {order.items === 1 ? "item" : "items"}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end space-x-4">
                        <span className="text-xl font-bold text-purple-600">
                          ₹{order.total.toFixed(2)}
                        </span>
                        <button
                          className={`px-4 py-2 ${isDark ? "bg-gray-700 hover:bg-gray-600 border-purple-700 hover:border-purple-600" : "bg-white hover:bg-purple-50 border-purple-200 hover:border-purple-300"} border text-purple-600 rounded-lg transition-colors text-sm`}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div
                className={`${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border rounded-xl p-6 ${isDark ? "hover:border-purple-700" : "hover:border-purple-300"} transition-colors shadow-sm`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h4
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Total Orders
                  </h4>
                </div>
                <p className="text-3xl font-bold text-purple-600">24</p>
              </div>

              <div
                className={`${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border rounded-xl p-6 ${isDark ? "hover:border-purple-700" : "hover:border-purple-300"} transition-colors shadow-sm`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h4
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Wishlist
                  </h4>
                </div>
                <p className="text-3xl font-bold text-purple-600">8</p>
              </div>

              <div
                className={`${isDark ? "bg-gray-900 border-purple-800" : "bg-white border-purple-200"} border rounded-xl p-6 ${isDark ? "hover:border-purple-700" : "hover:border-purple-300"} transition-colors shadow-sm`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h4
                    className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Member
                  </h4>
                </div>
                <p className="text-3xl font-bold text-purple-600">2Y</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
