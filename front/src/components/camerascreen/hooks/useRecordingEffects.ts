import useHandlerStates from "./useHandlerStates";
import recordVideo from "../../../utils/recordVideo";
import { camRef } from "../CameraView";
import stopVideoRecording from "../../../utils/stopVideoRecording";
import { useNavigation } from "@react-navigation/native";
import type { CameraScreenNavigator } from "../../../screens/CameraScreen";
import { useRecordedStore } from "../../../stateManagement";
import getVideoAnalysis from "../../../utils/getVideoAnalysis";

type onStartRecordingType = (beforeStart: () => void) => Promise<void>;

type typeUseRecordingEffects = () => {
  onStartRecording: onStartRecordingType;
  onStopRecording: () => void;
};

const useRecordingEffects: typeUseRecordingEffects = () => {
  const { setIsTimerVisible, startCountdown, setIsRecording, resetCountdown } =
    useHandlerStates();
  const { navigate } = useNavigation<CameraScreenNavigator>();
  const { setRecorded } = useRecordedStore((state) => state);

  const onStartRecording: onStartRecordingType = async (beforeStart) => {
    beforeStart();
    // setIsTimerVisible(true);
    // startCountdown(onFinishCountdown);

    // function onFinishCountdown(): void {
    //   setIsTimerVisible(false);
    //   setIsRecording(true);
    // }

    if (camRef.current != null) {
      await recordVideo(camRef.current)
        .then(async (data) => {
          if (typeof data === "string") {
            setRecorded(data);
            await getVideoAnalysis(data, "allen iverson cross");
            navigate("analysis");
          }
          resetCountdown();
          setIsRecording(false);
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
