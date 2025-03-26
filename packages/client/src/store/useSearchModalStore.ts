import { create } from "zustand";

interface IProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useSearchModalStore = create<IProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
