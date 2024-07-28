import { create } from "zustand";

type NewRosterState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewRoster = create<NewRosterState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
