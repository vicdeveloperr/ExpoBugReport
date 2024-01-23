import useCameraRecordingStore from "../../../stateManagement/useCameraRecordingStore";
import { useCountdownStore } from "../../../stateManagement/stores";
import useTimerVisibilityStore from "../../../stateManagement/useTimerVisibilyStore";
import type { TimerVisibilityStore } from "../../../stateManagement/useTimerVisibilyStore";
import useCancelAlertVisibility from "../../../stateManagement/useCancelAlertVisibility";
import type { CancelAlertVisibility } from "../../../stateManagement/useCancelAlertVisibility";

type typeUseHandlerStates = () => {
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;
  isTimerVisible: boolean;
  setIsTimerVisible: TimerVisibilityStore["setIsTimerVisible"];
  startCountdown: (onFinish?: (() => void) | undefined) => void;
  resetCountdown: () => void;
  isCancelAlertVisible: boolean;
  setIsCancelAlertVisible: CancelAlertVisibility["setIsCancelAlertVisible"];
};

const useHandlerStates: typeUseHandlerStates = () => {
  const { isTimerVisible, setIsTimerVisible } = useTimerVisibilityStore(
    (state) => state
  );
  const { setIsRecording, isRecording } = useCameraRecordingStore(
    (state) => state
  );
  const { startCountdown, resetCountdown } = useCountdownStore(
    (state) => state
  );
  const { isCancelAlertVisible, setIsCancelAlertVisible } =
    useCancelAlertVisibility((state) => state);

  return {
    isRecording,
    setIsRecording,
    isTimerVisible,
    setIsTimerVisible,
    startCountdown,
    resetCountdown,
    isCancelAlertVisible,
    setIsCancelAlertVisible,
  };
};

export default useHandlerStates;
