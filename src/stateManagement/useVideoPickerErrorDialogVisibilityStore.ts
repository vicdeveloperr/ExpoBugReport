import { create } from "zustand";

interface VideoPickerErrorDialogVisibilityStore {
  isVideoPickerErrorDialogVisible: boolean;
  updateVideoPickerErrorDialogVisibility: (isVisible: boolean) => void;
}

const useVideoPickerErrorDialogVisibilityStore =
  create<VideoPickerErrorDialogVisibilityStore>()((set) => ({
    isVideoPickerErrorDialogVisible: false,
    updateVideoPickerErrorDialogVisibility: (isVisible: boolean) => {
      set(() => ({ isVideoPickerErrorDialogVisible: isVisible }));
    },
  }));

export default useVideoPickerErrorDialogVisibilityStore;
