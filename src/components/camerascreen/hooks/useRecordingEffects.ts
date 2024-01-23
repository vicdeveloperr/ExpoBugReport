import { useState } from "react";
import useCameraRecordingStore from "../../../stateManagement/useCameraRecordingStore";
import { useCountdownStore } from "../../../stateManagement/stores";
import recordVideo from "../../../utils/recordVideo";
import { camRef } from "../CameraView";
import stopVideoRecording from "../../../utils/stopVideoRecording";

type typeUseRecordingEffects = () => {
  onStartRecording: () => Promise<void>;
  onStopRecording: () => void;
  isTimerVisible: boolean;
};

const useRecordingEffects: typeUseRecordingEffects = () => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const { setIsRecording } = useCameraRecordingStore((state) => state);
  const { startCountdown, resetCountdown } = useCountdownStore(
    (state) => state
  );

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

  return { onStartRecording, onStopRecording, isTimerVisible };
};

export default useRecordingEffects;
