import useHandlerStates from "./hooks/useHandlerStates";
import { TouchableOpacity } from "react-native";
import FormattedIcon from "../FormattedIcon";

const CameraRecordControllers: React.FC = () => {
  const { isRecording, setIsRecording } = useHandlerStates();

  function togglerRecording(): void {
    setIsRecording(!isRecording);
  }

  const testIdValue = isRecording ? "stopRecordButton" : "recordButton";
  const nameValue: "controller-stop" | "controller-record" = isRecording
    ? "controller-stop"
    : "controller-record";

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