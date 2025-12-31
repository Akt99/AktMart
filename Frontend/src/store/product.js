import { create } from "zustand";
import { useAuthStore } from "./auth";  
export const useProductStore = create((set) => ({
  products: [],

  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {

    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return {
        success: false,
        message: "All fields are required! Please fill the form properly.",
      };
    }

    try {
      const token = useAuthStore.getState().token;
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return { success: false, message: data.message || "Failed to create product" };
      }

      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product created successfully!" };
    } catch (error) {
      console.error("Create product error:", error);
      return { success: false, message: "Server error" };
    }
  },

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      set({ products: data.data || [] });
    } catch (error) {
      console.error("Fetch products error:", error);
      set({ products: [] });
    }
  },

  deleteProduct: async (productId) => {
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return { success: false, message: data.message || "Delete failed" };
      }

      set((state) => ({
        products: state.products.filter(
          (product) => product._id !== productId
        ),
      }));

      return { success: true, message: "Product deleted successfully!" };
    } catch (error) {
      console.error("Delete product error:", error);
      return { success: false, message: "Server error" };
    }
  },
  updateProduct: async (productId, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      const data = await res.json().catch(()=>({}));

      if (!res.ok || !data.success) {
        return { success: false, message: data.message || "Update failed" };
      }

      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId ? data.data : product
        ),
      }));

      return { success: true, message: "Product updated successfully!" };
    } catch (error) {
      console.error("Update product error:", error);
      return { success: false, message: "Server error" };
    }
  },
}));