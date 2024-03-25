import useHandlerStates from "./useHandlerStates";
import useRecordVideo from "../../../utils/useRecordVideo";
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

    if (camRef.current != null) {
      await useRecordVideo(camRef.current)
        .then(() => {
          resetCountdown();
          setIsRecording(false);
          navigate("loadVideo");
        })
        .catch((err: string) => {
          console.log(err);
        });
    } else {
      console.log("Falló al iniciar cámara. Verifique los permisos")
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
