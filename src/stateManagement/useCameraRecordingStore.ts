import { create } from "zustand/react";

interface CameraStoreState {
  isRecording: boolean;
}

const useCameraRecordingStore = create<CameraStoreState>((set) => ({
  isRecording: false,
  setIsRecording: (isRecording: boolean) => {
    set({
      isRecording,
    });
  },
}));

export default useCameraRecordingStore;
