import { TouchableOpacity, View, StyleSheet } from "react-native";
import FormattedIcon from "../FormattedIcon";
import ScreenContainer from "../ScreenContainer";
import useCameraTypeStore from "../../stateManagement/useCameraTypeStore";
import { CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

interface CameraControlsProps {

  onRecordingToggle: () => void;
  isRecording: boolean;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onRecordingToggle,
  isRecording,
}) => {
  const { cameraType, setCameraType } = useCameraTypeStore((state) => state);
  const navigation = useNavigation();

  return (
    <ScreenContainer styles={styles.cameraContentContainer}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          disabled={isRecording}
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
          testID="stopRecordButton"
        >
          <FormattedIcon name="controller-record" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onRecordingToggle}
          testID="recordButton"
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
