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

  return (
    <div className="min-h-screen bg-background">
      <Navbar selectedCategory={selectedCategory} onCategoryChange={() => {}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold mb-4">
                  {dummyUser.avatar}
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {dummyUser.name}
                </h2>
                <p className="text-primary mt-1 font-medium">Premium Member</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-start space-x-3 text-sm">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {dummyUser.email}
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {dummyUser.phone}
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {dummyUser.address}
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Member since {dummyUser.joinDate}
                  </span>
                </div>
              </div>

              <button className="w-full bg-primary hover:opacity-90 text-primary-foreground py-3 rounded-lg transition-opacity flex items-center justify-center space-x-2 font-semibold">
                <Settings className="w-5 h-5" />
                <span>Edit Profile</span>
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-primary" />
                    <span>My Orders</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span>Wishlist</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted text-foreground transition-colors">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-primary" />
                    <span>Settings</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Order History
                </h3>
                <button className="text-primary hover:opacity-90 text-sm font-medium transition-opacity">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="bg-muted/50 border border-border rounded-lg p-4 hover:border-ring transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-foreground">
                            {order.id}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400"
                                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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
                        <span className="text-xl font-bold text-primary">
                          ₹{order.total.toFixed(2)}
                        </span>
                        <button className="px-4 py-2 bg-card hover:bg-muted border border-border hover:border-ring text-primary rounded-lg transition-colors text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-ring transition-colors shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary p-2 rounded-lg">
                    <Package className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    Total Orders
                  </h4>
                </div>
                <p className="text-3xl font-bold text-primary">24</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-ring transition-colors shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Wishlist</h4>
                </div>
                <p className="text-3xl font-bold text-primary">8</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-ring transition-colors shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-primary p-2 rounded-lg">
                    <User className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">Member</h4>
                </div>
                <p className="text-3xl font-bold text-primary">2Y</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
