import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import CameraCountdownModal from "../components/camerascreen/CameraCountdownModal";
import { useCountdownStore } from "../stateManagement/stores";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
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
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.front);

  useEffect(() => {
    void requestCameraPermission();
    void requestMicrophonePermission();

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

    return () => {
      unsubscribe();
    };
  }, [isRecording]);

  const startRecording: () => void = () => {
    if (cameraRef.current !== null) {
      setIsTimerVisible(true);
      startCountdown(onFinishCountdown);

      function onFinishCountdown(): void {
        setIsTimerVisible(false);
        setRecording(true);
      }

      void (async () => {
        if (cameraRef.current !== null) {
          await cameraRef.current
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
      })();
    }
  };

  const stopRecording: () => void = () => {
    if (cameraRef.current !== null) {
      cameraRef.current.stopRecording();
      resetCountdown();
      setRecording(false);
    }
  };

  if (statusCameraPermission != null && statusMicrophonePermission != null) {
    return (
      <>
        <Camera
          style={styles.camera}
          ref={cameraRef}
          type={cameraType}
        >
          <CameraControls
            onBackPress={() => {
              navigation.goBack();
            }}
            onCameraSwitchPress={() => {
              setCameraType(
                cameraType === "front" ? CameraType.back : CameraType.front
              );
            }}
            onRecordingToggle={isRecording ? stopRecording : startRecording}
            isRecording={isRecording}
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
  camera: { flex: 1 },
});

export default CameraScreen;
