import { create } from "zustand";

interface SpeechStore {
  activeSpeech: boolean;
  setStatusSpeech: (status: boolean) => void;
}

const useSpeechStore = create<SpeechStore>((set) => ({
  activeSpeech: false,
  setStatusSpeech: (status) => {
    set({
      activeSpeech: status,
    });
  },
}));

export default useSpeechStore;
