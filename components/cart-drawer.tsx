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
    clearCart();
    setShowCheckoutMessage(true);

    setTimeout(() => {
      setShowCheckoutMessage(false);
      closeCart();
    }, 2500);
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-card border-l border-border shadow-xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border bg-muted">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold text-card-foreground">
              Shopping Cart
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-muted-foreground/10 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {showCheckoutMessage ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-accent/20 p-8 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Order Placed Successfully!
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Thank you for your purchase
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-muted p-8 rounded-full mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Your cart is empty
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Add items to get started
            </p>
            <button
              onClick={closeCart}
              className="bg-primary hover:opacity-90 text-primary-foreground px-6 py-3 rounded-lg transition-opacity font-semibold"
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
                  className="bg-muted border border-border rounded-xl p-4 space-y-3 hover:border-ring transition-colors"
                >
                  <div className="flex space-x-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-card rounded-lg overflow-hidden border border-border relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className="font-semibold text-card-foreground text-sm line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-primary font-bold text-lg">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-lg transition-colors h-fit"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 bg-card border border-border rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-card-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-primary">Subtotal</div>
                      <div className="font-bold text-card-foreground">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border bg-muted p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-accent">Free</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between text-xl font-bold text-card-foreground">
                  <span>Total</span>
                  <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={showCheckoutMessage}
                className="w-full bg-primary hover:opacity-90 text-primary-foreground py-4 rounded-lg font-semibold transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
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
