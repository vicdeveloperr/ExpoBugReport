import useHandlerStates from "./useHandlerStates";
import recordVideo from "../../../utils/recordVideo";
import { camRef } from "../CameraView";
import stopVideoRecording from "../../../utils/stopVideoRecording";
import { useNavigation } from "@react-navigation/native";
import type { CameraScreenNavigator } from "../../../screens/CameraScreen";
import { useRecordedStore } from "../../../stateManagement";

type typeUseRecordingEffects = () => {
  onStartRecording: () => Promise<void>;
  onStopRecording: () => void;
};

const useRecordingEffects: typeUseRecordingEffects = () => {
  const { setIsTimerVisible, startCountdown, setIsRecording, resetCountdown } =
    useHandlerStates();
  const { navigate } = useNavigation<CameraScreenNavigator>();
  const { setRecorded } = useRecordedStore((state) => state);

  const onStartRecording: () => Promise<void> = async () => {
    setIsTimerVisible(true);
    startCountdown(onFinishCountdown);

    function onFinishCountdown(): void {
      setIsTimerVisible(false);
      setIsRecording(true);
    }

    if (camRef.current != null) {
      await recordVideo(camRef.current)
        .then((data) => {
          if (typeof data === "string") {
            setRecorded(data);
          }
          resetCountdown();
          setIsRecording(false);
          navigate("analysis");
        })
        .catch((err: string) => {
          console.log(err);
        });
    }
  };

  const onStopRecording: () => void = () => {
    stopVideoRecording(camRef);
    resetCountdown();
    setIsRecording(false);
  };

  return { onStartRecording, onStopRecording };
};

export default useRecordingEffects;
