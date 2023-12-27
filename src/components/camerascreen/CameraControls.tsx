import { TouchableOpacity, View, StyleSheet } from "react-native";
import FormattedIcon from "../FormattedIcon";
import ScreenContainer from "../ScreenContainer";

interface CameraControlsProps {
  onBackPress: () => void;
  onCameraSwitch: () => void;
  onRecordingToggle: () => void;
  isRecording: boolean;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onBackPress,
  onCameraSwitch,
  onRecordingToggle,
  isRecording,
}) => {
  return (
    <ScreenContainer styles={styles.cameraContentContainer}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          disabled={isRecording}
        >
          <FormattedIcon
            name="back"
            size="small"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setCameraType(
              cameraType === "front" ? CameraType.back : CameraType.front
            )
          }
          disabled={isRecording}
        >
          <FormattedIcon
            name="camera-reverse-outline"
            size="small"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
        {isRecording ? (
          <FormattedIcon name="controller-stop" />
        ) : (
          <FormattedIcon name="controller-record" />
        )}
      </TouchableOpacity>
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
