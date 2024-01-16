import { create } from "zustand";
import { CameraType as CameraOrientation } from "expo-camera";
import type { CameraType } from "expo-camera";

const useCameraTypeStore = create((set) => ({
  cameraType: CameraOrientation.front,
  setCameraType: (newCameraType: CameraType) => {
    set({ cameraType: newCameraType });
  },
}));

export default useCameraTypeStore;
