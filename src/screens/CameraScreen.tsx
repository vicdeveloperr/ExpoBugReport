import React, { useState, useEffect } from "react";
import CameraCountdownModal from "../components/camerascreen/CameraCountdownModal";
import { useCountdownStore } from "../stateManagement/stores";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";
import CameraView, { camRef } from "../components/camerascreen/CameraView";
import recordVideo from "../utils/recordVideo";
import stopVideoRecording from "../utils/stopVideoRecording";
import useCameraRecordingStore from "../stateManagement/useCameraRecordingStore";

export interface CameraScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "camera">;
}

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }) => {
  const { isRecording, setIsRecording } = useCameraRecordingStore(
    (state) => state
  );
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

  const onStartRecording: () => Promise<void> = async () => {
    setIsTimerVisible(true);
    startCountdown(onFinishCountdown);

    function onFinishCountdown(): void {
      setIsTimerVisible(false);
      setIsRecording(true);
    }

    await recordVideo(camRef)
      .then(() => {
        resetCountdown();
        setIsRecording(false);
      })
      .catch((err: string) => {
        console.log(err);
      });
  };

  const onStopRecording: () => void = () => {
    stopVideoRecording(camRef);
    resetCountdown();
    setIsRecording(false);
  };

  return (
    <>
      <CameraView>
        <CameraControls
          onRecordingToggle={isRecording ? onStopRecording : onStartRecording}
        />
      </CameraView>
      {isTimerVisible && <CameraCountdownModal />}
    </>
  );
};

export default CameraScreen;
