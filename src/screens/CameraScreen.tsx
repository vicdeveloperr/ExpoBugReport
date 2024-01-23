import React, { useEffect } from "react";
import CameraCountdownModal from "../components/camerascreen/CameraCountdownModal";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";
import CameraView from "../components/camerascreen/CameraView";
import useHandlerStates from "../components/camerascreen/hooks/useHandlerStates";
import CancelAlertRecording from "../components/camerascreen/CancelAlertRecording";

export interface CameraScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "camera">;
}

type typeListenNavigateBackEvent = (
  navigation: CameraScreenProps["navigation"],
  isRecording: boolean
) => void;
const listenNavigateBackEvent: typeListenNavigateBackEvent = (
  navigation,
  isRecording
) => {
  navigation.addListener("beforeRemove", (event) => {
    if (isRecording) {
      event.preventDefault();
    }
  });
};

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }) => {
  const { resetCountdown, isRecording, isTimerVisible, isCancelAlertVisible } =
    useHandlerStates();

  useEffect(() => {
    return () => {
      resetCountdown();
    };
  }, []);

  useEffect(() => {
    return () => {
      listenNavigateBackEvent(navigation, isRecording);
    };
  }, [isRecording]);

  return (
    <>
      <CameraView>
        <CameraControls />
      </CameraView>
      {isTimerVisible && <CameraCountdownModal />}
      {isCancelAlertVisible && <CancelAlertRecording />}
    </>
  );
};

export default CameraScreen;
