import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import CameraCountdownModal from "../components/camerascreen/CameraCountdownModal";
import { useCountdownStore } from "../stateManagement/stores";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";
import CameraView, { camRef } from "../components/camerascreen/CameraView";
import recordVideo from "../utils/recordVideo";
import stopVideoRecording from "../utils/stopVideoRecording";

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

  const startRecording: () => Promise<void> = async () => {
    setIsTimerVisible(true);
    startCountdown(onFinishCountdown);

    function onFinishCountdown(): void {
      setIsTimerVisible(false);
      setRecording(true);
    }

    await recordVideo(camRef)
      .then(() => {
        resetCountdown();
        setRecording(false);
      })
      .catch((err: string) => {
        console.log(err);
      });
  };

  const stopRecording: () => void = () => {
    stopVideoRecording(camRef);
    resetCountdown();
    setRecording(false);
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
