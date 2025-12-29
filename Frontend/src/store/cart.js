import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product, quantity = 1) => {
    const cart = get().cart;
    const existing = cart.find((item) => item._id === product._id);

    if (existing) {
      set({
        cart: cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity }],
      });
    }
  },

  removeFromCart: (productId) => {
    set({
      cart: get().cart.filter((item) => item._id !== productId),
    });
  },

  clearCart: () => set({ cart: [] }),
  cartCount: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),
  totalPrice: () =>
    get().cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
}));
