import { create } from "zustand";

interface IUseSearchProps {
  search: string;
  set: (value: string) => void;
  remove: () => void;
}

export const useSearchState = create<IUseSearchProps>((set) => ({
  search: "",
  set: (value) => set(() => ({ search: value })),

  remove: () =>
    set(() => ({
      search: "",
    })),
}));
