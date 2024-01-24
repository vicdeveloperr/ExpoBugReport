import CameraScreen from "../../screens/CameraScreen";
import useHandlerStates from "./hooks/useHandlerStates";
import CameraCountdownModal from "./CameraCountdownModal";
import CancelAlertRecording from "./CancelAlertRecording";

export const CameraScreenWithTimerAndAlert: React.FC = () => {
  const { isTimerVisible, isCancelAlertVisible } = useHandlerStates();
  return (
    <CameraScreen>
      {isTimerVisible && <CameraCountdownModal />}
      {isCancelAlertVisible && <CancelAlertRecording />}
    </CameraScreen>
  );
};
