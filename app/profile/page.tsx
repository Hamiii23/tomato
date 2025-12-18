"use client";

import { useState } from "react";
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
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Modern Street, Tech City, TC 12345",
  joinDate: "January 2023",
  avatar: "AJ",
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

  return (
    <div className="min-h-screen">
      <Navbar selectedCategory={selectedCategory} onCategoryChange={() => {}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold shadow-lg shadow-teal-500/30">
                  {dummyUser.avatar}
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {dummyUser.name}
                </h2>
                <p className="text-slate-400 mt-1">Premium Member</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-700">
                <div className="flex items-start space-x-3 text-sm">
                  <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{dummyUser.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{dummyUser.phone}</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{dummyUser.address}</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Calendar className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Member since {dummyUser.joinDate}
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 flex items-center justify-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-teal-400" />
                    <span>My Orders</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-teal-400" />
                    <span>Wishlist</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-teal-400" />
                    <span>Settings</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Order History</h3>
                <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="bg-slate-700/30 border border-slate-700 rounded-lg p-4 hover:border-teal-500/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-white">
                            {order.id}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === "Delivered"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
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
                        <span className="text-xl font-bold text-teal-400">
                          ${order.total.toFixed(2)}
                        </span>
                        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/30 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Total Orders</h4>
                </div>
                <p className="text-3xl font-bold text-teal-400">24</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/30 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Wishlist</h4>
                </div>
                <p className="text-3xl font-bold text-teal-400">8</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/30 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Member</h4>
                </div>
                <p className="text-3xl font-bold text-teal-400">2Y</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
