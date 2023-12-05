import { create } from "zustand";

type countdownStore = {
  countdown: number;
  substractCountdown: () => void;
};

export const useCountdownStore = create<countdownStore>((set) => ({
  countdown: 3,
  substractCountdown: () =>
    set(({ countdown }) => {
      const newValue = countdown > 0 ? countdown - 1 : 3;
      return { countdown: newValue };
    }),
}));
