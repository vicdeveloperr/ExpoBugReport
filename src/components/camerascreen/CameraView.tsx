import { useRef, useEffect } from "react";
import {
  Camera,
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync,
} from "expo-camera";
import type { CameraType } from "expo-camera";
import { StyleSheet } from "react-native";
import type { CameraScreenProps } from "../../screens/CameraScreen";
interface CameraViewProps {
  cameraType: CameraType;
  onCameraReady?: (camera: Camera) => void;
  children: React.ReactNode;
  isCameraPermissionGranted: boolean;
  isMicrophonePermissionGranted: boolean;
  navigation: CameraScreenProps["navigation"];
}

const CameraView: React.FC<CameraViewProps> = ({
  cameraType,
  onCameraReady,
  children,
  isCameraPermissionGranted,
  isMicrophonePermissionGranted,
  navigation,
}) => {
  const camRef = useRef<Camera>(null);
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
        console.log("Falló al conceder permisos al micrófono", err);
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
    navigation.navigate("videoTutorial");
  }
};

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default CameraView;
