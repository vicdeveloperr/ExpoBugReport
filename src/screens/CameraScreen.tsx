import React, { useEffect } from "react";
import CameraCountdownModal from "../components/camerascreen/CameraCountdownModal";
import { useCountdownStore } from "../stateManagement/stores";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";
import CameraView from "../components/camerascreen/CameraView";
import useRecordingEffects from "../components/camerascreen/hooks/useRecordingEffects";
import useCameraRecordingStore from "../stateManagement/useCameraRecordingStore";

export interface CameraScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "camera">;
}

const listenNavigateBackEvent: (
  navigation: CameraScreenProps["navigation"],
  isRecording: boolean
) => void = (navigation, isRecording) => {
  navigation.addListener("beforeRemove", (event) => {
    if (isRecording) {
      event.preventDefault();
      alert("Grabación en curso");
    }
  });
};

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }) => {
  const { isRecording } = useCameraRecordingStore((state) => state);
  const { resetCountdown } = useCountdownStore((state) => state);

  const { onStartRecording, onStopRecording, isTimerVisible } =
    useRecordingEffects();

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
