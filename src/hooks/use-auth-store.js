import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    status: "loading",
    clearUser: () => set({ user: null, status: "unauthenticated" }),
    setNewUser: (newData) => {
        set((state) => ({ user: {...state.user, ...newData}, status: "authenticated"}));
    },
}));