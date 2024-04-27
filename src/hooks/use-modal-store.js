import { create } from "zustand";

export const useModalStore = create((set) => ({
    IsOpen: false,
    setModalOpen: (onOpen) => {
		set({open: onOpen});
    },
}));
