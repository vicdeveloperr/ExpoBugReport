import useHandlerStates from "./useHandlerStates";
import recordVideo from "../../../utils/recordVideo";
import { camRef } from "../CameraView";
import stopVideoRecording from "../../../utils/stopVideoRecording";
import { useNavigation } from "@react-navigation/native";
import type { CameraScreenNavigator } from "../../../screens/CameraScreen";

type typeUseRecordingEffects = () => {
  onStartRecording: () => Promise<void>;
  onStopRecording: () => void;
};

const useRecordingEffects: typeUseRecordingEffects = () => {
  const { setIsTimerVisible, startCountdown, setIsRecording, resetCountdown } =
    useHandlerStates();
  const { navigate } = useNavigation<CameraScreenNavigator>();

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
        navigate("loadVideo");
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
