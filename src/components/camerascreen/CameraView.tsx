import { useRef, useEffect } from "react";
import { Camera } from "expo-camera";
import { StyleSheet } from "react-native";
import useCameraTypeStore from "../../stateManagement/useCameraTypeStore";
interface CameraViewProps {
  children: React.ReactNode;
}

export let camRef: React.RefObject<Camera>;

const CameraView: React.FC<CameraViewProps> = ({ children }) => {
  camRef = useRef<Camera>(null);

  const { cameraType } = useCameraTypeStore((state) => state);

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
  } // Renderizar cuadro de diálogo sino se conceden los permisos
};

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default CameraView;
