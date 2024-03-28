import { create } from "zustand";

interface SpeechStore {
  isSpeechActive: boolean;
  setStatusSpeech: (status: boolean) => void;
}

const useSpeechStore = create<SpeechStore>((set) => ({
  isSpeechActive: false,
  setStatusSpeech: (status) => {
    set({
      isSpeechActive: status,
    });
  },
}));

export default useSpeechStore;
