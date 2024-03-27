import useHandlerStates from "./useHandlerStates";
import { camRef } from "../CameraView";
import stopVideoRecording from "../../../utils/stopVideoRecording";
import { useNavigation } from "@react-navigation/native";
import type { CameraScreenNavigator } from "../../../screens/CameraScreen";
import { useRecordedStore } from "../../../stateManagement";

type typeUseRecordingEffects = () => {
  onStartRecording: onStartRecordingType;
  onStopRecording: () => void;
};

const useRecordingEffects: typeUseRecordingEffects = () => {
  const { setIsRecording, resetCountdown } = useHandlerStates();

  const onStopRecording: () => void = () => {
    stopVideoRecording(camRef);
    resetCountdown();
    setIsRecording(false);
  };

  return { onStartRecording, onStopRecording };
};

export default useRecordingEffects;
