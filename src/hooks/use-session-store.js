import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSessionStore = create(
  persist(
    (set) => ({
      sessionExpired: false,
      setSessionExpired: (sessionExpired) => set({ sessionExpired }),
      reset: () => set({ sessionStorage: false }),
    }),
    { name: "session-storage" }
  )
);

// Export a setter function that can be used outside of React components
export const setSessionExpired = (expired) => {
  useSessionStore.setState({ sessionExpired: expired });
};

