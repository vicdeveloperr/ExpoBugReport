import useCameraRecordingStore from "../../../stateManagement/useCameraRecordingStore";
import { useCountdownStore } from "../../../stateManagement/stores";
import { useState } from "react";

type typeUseHandlerStates = () => {
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;
  isTimerVisible: boolean;
  setIsTimerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  startCountdown: (onFinish?: (() => void) | undefined) => void;
  resetCountdown: () => void;
};

const useHandlerStates: typeUseHandlerStates = () => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const { setIsRecording, isRecording } = useCameraRecordingStore(
    (state) => state
  );
  const { startCountdown, resetCountdown } = useCountdownStore(
    (state) => state
  );

  return {
    isRecording,
    setIsRecording,
    isTimerVisible,
    setIsTimerVisible,
    startCountdown,
    resetCountdown,
  };
};

export default useHandlerStates;
