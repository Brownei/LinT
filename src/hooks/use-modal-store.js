import { create } from "zustand";

export const useModalStore = create((set) => ({
    IsOpen: false,
    setModalOpen: () => {
		set({open: true});
    },
}));
