import recordVideo from "../../../utils/recordVideo";
import getVideoAnalysis from "../../../utils/getVideoAnalysis";
import { useNavigation } from "@react-navigation/native";
import { useRecordedStore } from "../../../stateManagement";
import useHandlerStates from "./useHandlerStates";
import { camRef } from "../CameraView";
import { CameraScreenNavigator } from "../../../screens/CameraScreen";

type onStartRecordingType = () => Promise<() => void>;

function useBeforeStart() {
  const { setIsTimerVisible, startCountdown, setIsRecording } =
    useHandlerStates();

  const beforeStart = () => {
    setIsTimerVisible(true);
    startCountdown(onFinishCountdown);

    function onFinishCountdown(): void {
      setIsTimerVisible(false);
      setIsRecording(true);
    }
  };

  return beforeStart;
}

export const useOnStartRecording: onStartRecordingType = async () => {
  const beforeStart = useBeforeStart();

  const { navigate } = useNavigation<CameraScreenNavigator>();
  const { setRecorded } = useRecordedStore((state) => state);
  const { resetCountdown, setIsRecording } = useHandlerStates();

  const onStartRecording = async () => {
    beforeStart();
    
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

  return onStartRecording;
};
