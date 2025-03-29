import { create } from "zustand";

export interface IUseSearchModalStoreProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useSearchModalStore = create<IUseSearchModalStoreProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
