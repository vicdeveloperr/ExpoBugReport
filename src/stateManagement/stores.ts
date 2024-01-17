export * from "./useCameraTypeStore";

import { create } from "zustand";

type countdownStore = {
  countdown: number;
  startCountdown: (onFinish?: () => void) => void;
  resetCountdown: () => void;
  intervalId?: NodeJS.Timeout;
};

export const useCountdownStore = create<countdownStore>((set) => ({
  countdown: 3,
  startCountdown: (onFinish) => {
    const intervalId = setInterval(() => {
      set((state) => {
        let newValue;
        if (state.countdown > 1) {
          newValue = state.countdown - 1;
        } else {
          onFinish ? onFinish() : undefined;
          newValue = 3;
        }

        return { countdown: newValue };
      });
    }, 1000);

    set({ intervalId });
  },
  resetCountdown: () => {
    set((state) => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
      }
      return { countdown: 3, intervalId: undefined };
    });
  },
}));

type BtnPlayModalStore = {
  isBtnPlayVisible: boolean;
  toggleBtnPlay: () => void;
};

export const useBtnPlayModalStore = create<BtnPlayModalStore>((set) => ({
  isBtnPlayVisible: false,
  toggleBtnPlay: () =>
    set((state) => ({ isBtnPlayVisible: !state.isBtnPlayVisible })),
}));

interface VideoPlayerStore {
  isPlaying: boolean;
  setPlaying: (playing: boolean) => void;
}

export const useVideoPlayerStore = create<VideoPlayerStore>((set) => ({
  isPlaying: true,
  setPlaying: (playing) => set({ isPlaying: playing }),
}));

// Tienda 'VideoProcessing'
interface VideoProcessingStore {
  isVideoProcessing: boolean;
  setIsVideoProcessing: (status: boolean) => void;
}

export const useVideoProcessingStore = create<VideoProcessingStore>((set) => ({
  isVideoProcessing: false,
  setIsVideoProcessing: (status) => set({ isVideoProcessing: status }),
}));
