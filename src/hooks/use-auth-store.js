import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    status: "loading",
    clear: () => set({ user: null, status: "unauthenticated" }),
    set: (newData) => {
        set({ user: newData, status: "authenticated"});
    },
}));