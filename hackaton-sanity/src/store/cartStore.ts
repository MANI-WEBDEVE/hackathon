import { create } from "zustand";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string
    // Add other product properties as needed
}

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    cartCount: () => number;
}

const useCartStore = create<CartState>((set) => ({
    cart: [], // Cart items

    // Add to Cart
    addToCart: (product: Product) =>
        set((state) => {
            const isProductInCart = state.cart.some((item) => item.id === product.id);
            if (!isProductInCart) {
                return { cart: [...state.cart, product] };
            }
            return state; // No changes if product already exists
        }),

    // Remove from Cart
    removeFromCart: (productId: string) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        })),

    // Get Cart Count
    cartCount: () => set((state) => state.cart.length as any) as any,
}));

export default useCartStore;
