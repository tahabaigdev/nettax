import { create } from "zustand";

type MenuState = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;

  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  // Mobile Menu
  isMenuOpen: false,
  setIsMenuOpen: (value) => set({ isMenuOpen: value }),

  // Dropdown Menu
  activeDropdown: null,
  setActiveDropdown: (value) => set({ activeDropdown: value }),
}));
