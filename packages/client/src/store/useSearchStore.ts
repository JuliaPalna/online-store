import { create } from "zustand";

interface IProps {
  search: string;
  set: (value: string) => void;
  remove: () => void;
}

export const useSearchStore = create<IProps>((set) => ({
  search: "",
  set: (value) => set(() => ({ search: value })),

  remove: () =>
    set(() => ({
      search: "",
    })),
}));
