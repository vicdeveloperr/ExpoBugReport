import { useRef, useEffect } from "react";
import {
  Camera,
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync,
} from "expo-camera";
import { StyleSheet } from "react-native";
import useCameraTypeStore from "../../stateManagement/useCameraTypeStore";
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "../../navigation/StackNavigator";
import type { NavigationProp } from "@react-navigation/native";
interface CameraViewProps {
  children: React.ReactNode;
  isCameraPermissionGranted: boolean;
  isMicrophonePermissionGranted: boolean;
}

export let camRef: React.RefObject<Camera>;

const CameraView: React.FC<CameraViewProps> = ({
  children,
  isCameraPermissionGranted,
  isMicrophonePermissionGranted,
}) => {
  camRef = useRef<Camera>(null);

  const { cameraType } = useCameraTypeStore((state) => state);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
