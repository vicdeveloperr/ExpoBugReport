import { TouchableOpacity, View, StyleSheet } from "react-native";
import FormattedIcon from "../FormattedIcon";
import ScreenContainer from "../ScreenContainer";
import useCameraTypeStore from "../../stateManagement/useCameraTypeStore";
import { CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import useCameraRecordingStore from "../../stateManagement/useCameraRecordingStore";
import useCancelAlertVisibility from "../../stateManagement/useCancelAlertVisibility";
import type { GestureResponderEvent } from "react-native";
interface CameraControlsProps {
  onRecordingToggle: () => void;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onRecordingToggle,
}) => {
  const { isRecording } = useCameraRecordingStore((state) => state);
  const { cameraType, setCameraType } = useCameraTypeStore((state) => state);
  const navigation = useNavigation();
  const { setIsCancelAlertVisible } = useCancelAlertVisibility(
    (state) => state
  );

  type typeHandlerBackButton = (event: GestureResponderEvent) => void;
  const handlerBackButton: typeHandlerBackButton = (event) => {
    if (isRecording) {
      event.preventDefault();
      setIsCancelAlertVisible(true);
    } else {
      navigation.goBack();
    }
  };

  return (
    <ScreenContainer styles={styles.cameraContentContainer}>
      <View
        testID="CameraControls"
        style={styles.topButtonsContainer}
      >
        <TouchableOpacity
          onPress={handlerBackButton}
          testID="backButton"
        >
          <FormattedIcon
            name="back"
            size="small"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const newCameraType =
              cameraType === "front" ? CameraType.back : CameraType.front;
            setCameraType(newCameraType);
          }}
          testID="cameraSwitchButton"
          disabled={isRecording}
        >
          <FormattedIcon
            name="camera-reverse-outline"
            size="small"
          />
        </TouchableOpacity>
      </View>
      {isRecording ? (
        <TouchableOpacity
          onPress={onRecordingToggle}
          testID="recordButton"
        >
          <FormattedIcon name="controller-record" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onRecordingToggle}
          testID="stopRecordButton"
        >
          <FormattedIcon name="controller-stop" />
        </TouchableOpacity>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  buttonGoBack: {
    alignSelf: "flex-start",
  },
  cameraContentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topButtonsContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default CameraControls;
