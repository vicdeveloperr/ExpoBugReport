import { create } from "zustand";

type countdownStore = {
  countdown: number;
  startCountdown: (onFinish?: () => void) => void;
  resetCountdown: () => void;
  intervalId?: NodeJS.Timeout;
};

export const useCountdownStore = create<countdownStore>((set) => ({
  countdown: 3
}));
