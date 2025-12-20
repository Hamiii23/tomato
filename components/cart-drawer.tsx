"use client";

import { useCart } from "@/lib/cart-context";
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    isCartOpen,
    closeCart,
    clearCart,
  } = useCart();

  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const handleCheckout = () => {
    // Clear the cart immediately
    clearCart();
    // Show success message
    setShowCheckoutMessage(true);

    // Hide message and close cart after delay
    setTimeout(() => {
      setShowCheckoutMessage(false);
      closeCart();
    }, 2500);
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 border-l border-purple-200 dark:border-purple-800 shadow-xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Shopping Cart
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-purple-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {showCheckoutMessage ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Order Placed Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Thank you for your purchase
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-purple-50 dark:bg-gray-800 p-8 rounded-full mb-6">
              <ShoppingBag className="w-12 h-12 text-purple-300 dark:text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Add items to get started
            </p>
            <button
              onClick={closeCart}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-purple-50 dark:bg-gray-800 border border-purple-200 dark:border-purple-800 rounded-xl p-4 space-y-3 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                >
                  <div className="flex space-x-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg overflow-hidden border border-purple-100 dark:border-purple-800 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-purple-600 font-bold text-lg">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-600 dark:text-gray-400 hover:text-red-600 rounded-lg transition-colors h-fit"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 border border-purple-200 dark:border-purple-800 rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-purple-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-purple-50 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-purple-600">Subtotal</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-gray-800 p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-purple-200 dark:border-purple-800 pt-2 flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-purple-600">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={showCheckoutMessage}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {showCheckoutMessage ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
