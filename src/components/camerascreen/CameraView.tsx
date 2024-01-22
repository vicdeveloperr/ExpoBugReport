import { useRef, useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { StyleSheet } from "react-native";
interface CameraViewProps {
  children: React.ReactNode;
}

export let camRef: React.RefObject<Camera>;

const CameraView: React.FC<CameraViewProps> = ({ children }) => {
  camRef = useRef<Camera>(null);

  const [statusCameraPermissions, requestCameraPermissions] =
    Camera.useCameraPermissions();

  const [statusMicrophonePermissions, requestMicrophonePermissions] =
    Camera.useCameraPermissions();

  useEffect(() => {
    if (statusCameraPermissions === null) {
      void requestCameraPermissions();
    } else if (statusMicrophonePermissions === null) {
      void requestMicrophonePermissions();
    }
  }, []);

  if (
    statusCameraPermissions !== null &&
    statusMicrophonePermissions !== null
  ) {
    return (
      <Camera
        ref={camRef}
        style={styles.camera}
        type={cameraType}
      >
        {children}
      </Camera>
    );
  }
};

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default CameraView;
