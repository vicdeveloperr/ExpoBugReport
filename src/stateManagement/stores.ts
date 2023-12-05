import { create } from "zustand";

type countdownStore = {
  countdown: number;
  setCountdown: (value: number) => void;
};

export const useCountdownStore = create<countdownStore>((set) => ({
  countdown: 3,
  setCountdown: (value) => set({ countdown: value }),
}));
