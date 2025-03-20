import { create } from "zustand";

interface IUseModuleProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useModal = create<IUseModuleProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
