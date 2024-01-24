import React, { useEffect } from "react";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import CameraControls from "../components/camerascreen/CameraControls";
import CameraView from "../components/camerascreen/CameraView";
import useHandlerStates from "../components/camerascreen/hooks/useHandlerStates";
import { useListenNavigateBackEvent } from "../components/camerascreen/hooks/useListenBackEvent";
import type { navigationEvent } from "../types/navigationEvent";

export type CameraScreenNavigator = StackNavigationProp<
  RootStackParamList,
  "camera"
>;
export interface CameraScreenProps {
  children?: React.ReactNode;
}

const CameraScreen: React.FC<CameraScreenProps> = ({ children }) => {
  const { resetCountdown, isRecording } = useHandlerStates();

  useListenNavigateBackEvent(onNavigateBack);
  function onNavigateBack(e: navigationEvent): void {
    if (isRecording) {
      e.preventDefault();
    }
  }

  useEffect(() => {
    return () => {
      resetCountdown();
    };
  }, []);

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
