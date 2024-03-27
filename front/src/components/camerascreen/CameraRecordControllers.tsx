import useHandlerStates from "./hooks/useHandlerStates";
import { TouchableOpacity } from "react-native";
import FormattedIcon from "../FormattedIcon";
import useRecordingEffects from "./hooks/useRecordingEffects";

function useBeforeStart() {
  const { setIsTimerVisible, startCountdown, setIsRecording } =
    useHandlerStates();

  setIsTimerVisible(true);
  startCountdown(onFinishCountdown);

  function onFinishCountdown(): void {
    setIsTimerVisible(false);
    setIsRecording(true);
  }
}

const CameraRecordControllers: React.FC = () => {
  const { isRecording } = useHandlerStates();
  const effects = useRecordingEffects();

  const testIdValue = isRecording ? "stopRecordButton" : "recordButton";
  type typeNameValue = "controller-stop" | "controller-record";
  const nameValue: typeNameValue = isRecording
    ? "controller-stop"
    : "controller-record";
  const togglerRecording: () => void = isRecording
    ? effects.onStopRecording
    : () => effects.onStartRecording(useBeforeStart);

  return (
    <TouchableOpacity
      onPress={togglerRecording}
      testID={testIdValue}
    >
      <FormattedIcon name={nameValue} />
    </TouchableOpacity>
  );
};

export default CameraRecordControllers;
