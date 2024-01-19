import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import CameraCountdownModal from "../components/camerascreen/CameraCountdownModal";
import { useCountdownStore } from "../stateManagement/stores";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";
import CameraView from "../components/camerascreen/CameraView";

export interface CameraScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "camera">;
}

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }) => {
  const [isRecording, setRecording] = useState(false);
  const [statusCameraPermission] = Camera.useCameraPermissions();
  const [statusMicrophonePermission] = Camera.useMicrophonePermissions();
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const { startCountdown, resetCountdown } = useCountdownStore(
    (state) => state
  );

  useEffect(() => {
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
  };

  const stopRecording: () => void = () => {
    if (cameraRef.current !== null) {
      cameraRef.current.stopRecording();
      resetCountdown();
      setRecording(false);
    }
  };

  return (
    <>
      <CameraView
        cameraType={cameraType}
        isCameraPermissionGranted={statusCameraPermission != null}
        isMicrophonePermissionGranted={statusMicrophonePermission != null}
        navigation={navigation}
      >
        <CameraControls
          onRecordingToggle={isRecording ? stopRecording : startRecording}
          isRecording={isRecording}
        />
      </CameraView>
      {isTimerVisible && <CameraCountdownModal />}
    </>
  );
};

export default CameraScreen;
