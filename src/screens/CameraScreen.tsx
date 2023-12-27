import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import FormattedIcon from "../components/FormattedIcon";
import ScreenContainer from "../components/ScreenContainer";
import CameraCountdownModal from "../components/camerascreen/CameraCountdownModal";
import {
  useCountdownStore,
  useVideoProcessingStore,
} from "../stateManagement/stores";
import uploadVideo from "../utils/uploadVideo";
import ScreenDark from "../components/ScreenDarkModal";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";

interface CameraScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "camera">;
}

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }) => {
  const cameraRef = useRef<Camera>(null);
  const [isRecording, setRecording] = useState(false);
  const [statusCameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [statusMicrophonePermission, requestMicrophonePermission] =
    Camera.useMicrophonePermissions();
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const { startCountdown, resetCountdown } = useCountdownStore(
    (state) => state
  );
  const { isVideoProcessing, setIsVideoProcessing } = useVideoProcessingStore(
    (state) => state
  );
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.front);

  useEffect(() => {
    requestCameraPermission();
    requestMicrophonePermission();

    return () => {
      resetCountdown();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (event) => {
      if (isRecording) {
        event.preventDefault();
        alert("Grabación en curso");
      }
    });

    return () => unsubscribe();
  }, [isRecording]);

  const startRecording = async () => {
    if (cameraRef.current) {
      setIsTimerVisible(true);
      startCountdown(onFinishCountdown);

      function onFinishCountdown() {
        setIsTimerVisible(false);
        setRecording(true);
      }

      const recordAsyncResponse = await cameraRef.current
        .recordAsync({
          maxDuration: 10,
        })
        .then(({ uri }) => {
          stopRecording();
          navigation.navigate("loadVideo");
          console.log("Video grabado:", uri);
        })
        .catch((error) => {
          console.error("Error al iniciar la grabación:", error);
        });
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
      resetCountdown();
      setRecording(false);
    }
  };

  if (statusCameraPermission && statusMicrophonePermission) {
    return (
      <>
        <Camera
          style={styles.camera}
          ref={cameraRef}
          type={cameraType}
        >
          <CameraControls
            onBackPress={() => navigation.goBack()}
            onCameraSwitchPress={() =>
              setCameraType(
                cameraType === "front" ? CameraType.back : CameraType.front
              )
            }
            onRecordingToggle={isRecording ? stopRecording : startRecording}
            isRecording
          />
        </Camera>
        {isTimerVisible && <CameraCountdownModal />}
      </>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  camera: { flex: 1 }
})

export default CameraScreen;
