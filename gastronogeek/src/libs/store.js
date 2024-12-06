import { create } from "zustand";

// Zustand store pour gérer l'état de transition
export const useStore = create((set) => ({
  // Indicateur pour activer/désactiver la transition
  isTransitionActive: false,
  setIsTransitionActive: (val) => set({ isTransitionActive: val }),

  // Sauvegarde du dernier chemin pour la navigation
  lastPathname: "",
  setLastPathName: (val) => set({ lastPathname: val }),
}));
