import { create } from "zustand";

type NewFuelState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewFuel = create<NewFuelState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
