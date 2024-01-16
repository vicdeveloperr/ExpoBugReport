import { useRef, useEffect } from "react";
import { Camera } from "expo-camera";
import type { CameraType } from "expo-camera";
import { StyleSheet } from "react-native";

interface CameraViewProps {
  cameraType: CameraType;
  onCameraReady?: (camera: Camera) => void;
  children: React.ReactNode;
}

const CameraView: React.FC<CameraViewProps> = ({
  cameraType,
  onCameraReady,
  children,
}) => {
  const camRef = useRef<Camera>(null);
  const [statusCameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [statusMicrophonePermission, requestMicrophonePermission] =
    Camera.useMicrophonePermissions();

  useEffect(() => {
    if (statusCameraPermission != null) {
      void requestCameraPermission();
    } else if (statusMicrophonePermission != null) {
      void requestMicrophonePermission();
    }
  }, []);

  if (statusCameraPermission != null && statusMicrophonePermission != null) {
    return (
      <Camera
        ref={camRef}
        style={styles.camera}
        type={cameraType}
      >
        {children}
      </Camera>
    );
  } else if (statusCameraPermission != null) {
    return (
      <Camera
        ref={camRef}
        style={styles.camera}
        type={cameraType}
      >
        {children}
      </Camera>
    );
  } else {
    return <></>; // Agregar cuadro de diálogo
  }
};

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default CameraView;
