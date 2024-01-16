import { useRef, useEffect } from "react";
import {
  Camera,
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync,
} from "expo-camera";
import type { CameraType } from "expo-camera";
import { StyleSheet } from "react-native";

interface CameraViewProps {
  cameraType: CameraType;
  onCameraReady?: (camera: Camera) => void;
  children: React.ReactNode;
  isCameraPermissionGranted: boolean;
  isMicrophonePermissionGranted: boolean;
}

const CameraView: React.FC<CameraViewProps> = ({
  cameraType,
  onCameraReady,
  children,
  isCameraPermissionGranted,
  isMicrophonePermissionGranted,
}) => {
  const camRef = useRef<Camera>(null);
  // const [statusCameraPermission, requestCameraPermission] =
  //   Camera.useCameraPermissions();
  // const [statusMicrophonePermission, requestMicrophonePermission] =
  //   Camera.useMicrophonePermissions();

  useEffect(() => {
    if (isCameraPermissionGranted) {
      try {
        void requestCameraPermissionsAsync();
      } catch (err) {
        console.log("Falló al conceder permisos a la cámara", err);
      }
    } else if (isMicrophonePermissionGranted) {
      try {
        void requestMicrophonePermissionsAsync();
      } catch (err) {
        console.log("Falló al conceder permisos al micrófono", err)
      }
    }
  }, []);

  if (isCameraPermissionGranted && isMicrophonePermissionGranted) {
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
