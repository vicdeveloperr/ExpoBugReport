import { useRef, useEffect } from "react";
import { Camera } from "expo-camera";
import { StyleSheet } from "react-native";
import useCameraTypeStore from "../../stateManagement/useCameraTypeStore";
import { useNavigation } from "@react-navigation/native";
import type { CameraScreenNavigator } from "../../screens/CameraScreen";

interface CameraViewProps {
  children: React.ReactNode;
}

export let camRef: React.RefObject<Camera>;

const CameraView: React.FC<CameraViewProps> = ({ children }) => {
  camRef = useRef<Camera>(null);
  const { navigate } = useNavigation<CameraScreenNavigator>();

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
        testID="CameraView"
      >
        {children}
      </Camera>
    );
  } else navigate("videoTutorial");
};

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default CameraView;
