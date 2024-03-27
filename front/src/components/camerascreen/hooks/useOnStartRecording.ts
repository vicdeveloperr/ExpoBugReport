import recordVideo from "../../../utils/recordVideo";
import getVideoAnalysis from "../../../utils/getVideoAnalysis";
import { useNavigation } from "@react-navigation/native";
import { useRecordedStore } from "../../../stateManagement";
import useHandlerStates from "./useHandlerStates";
import { camRef } from "../CameraView";
import { CameraScreenNavigator } from "../../../screens/CameraScreen";

type onStartRecordingType = (
  useBeforeStart: () => void,
  afterEnd?: () => void
) => Promise<void>;

export const useOnStartRecording: onStartRecordingType = async (
  useBeforeStart,
  afterEnd
) => {
  useBeforeStart();

  const { navigate } = useNavigation<CameraScreenNavigator>();
  const { setRecorded } = useRecordedStore((state) => state);
  const { resetCountdown, setIsRecording } = useHandlerStates();

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

  afterEnd ? afterEnd() : undefined;
};
