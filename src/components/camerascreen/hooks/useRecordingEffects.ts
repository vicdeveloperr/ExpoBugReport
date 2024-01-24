import useHandlerStates from "./useHandlerStates";
import recordVideo from "../../../utils/recordVideo";
import { camRef } from "../CameraView";
import stopVideoRecording from "../../../utils/stopVideoRecording";

type typeUseRecordingEffects = () => {
  onStartRecording: () => Promise<void>;
  onStopRecording: () => void;
};

const useRecordingEffects: typeUseRecordingEffects = () => {
  const { setIsTimerVisible, startCountdown, setIsRecording, resetCountdown } =
    useHandlerStates();

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

  return { onStartRecording, onStopRecording };
};

export default useRecordingEffects;
