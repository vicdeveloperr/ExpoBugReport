import React, { useEffect } from "react";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";
import CameraView from "../components/camerascreen/CameraView";
import useHandlerStates from "../components/camerascreen/hooks/useHandlerStates";
import { useNavigation } from "@react-navigation/native";

type typeListenNavigateBackEvent = (
  navigation: CameraScreenNavigator,
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

export type CameraScreenNavigator = StackNavigationProp<
  RootStackParamList,
  "camera"
>;
interface CameraScreenProps {
  children?: React.ReactNode;
}

const CameraScreen: React.FC<CameraScreenProps> = ({ children }) => {
  const { resetCountdown, isRecording } = useHandlerStates();
  const navigation = useNavigation<CameraScreenNavigator>();

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
      {children}
    </>
  );
};

export default CameraScreen;
