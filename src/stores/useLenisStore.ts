import { create } from "zustand";
import Lenis from "@studio-freight/lenis";

interface LenisStore {
  lenis: Lenis | null;
  setLenis: (lenis: Lenis | null) => void;
}

export const useLenisStore = create<LenisStore>((set) => ({
  lenis: null,
  setLenis: (lenis) => set({ lenis }),
}));
