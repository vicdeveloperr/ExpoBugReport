import { TouchableOpacity, View, StyleSheet } from "react-native";
import FormattedIcon from "../FormattedIcon";
import ScreenContainer from "../ScreenContainer";
import type { CameraScreenProps } from "../../screens/CameraScreen";
import useCameraTypeStore from "../../stateManagement/useCameraTypeStore";
import { CameraType } from "expo-camera";

interface CameraControlsProps {
  navigation: CameraScreenProps["navigation"];
  onBackPress: () => void;
  onCameraSwitchPress: () => void;
  onRecordingToggle: () => void;
  isRecording: boolean;
}

const CameraControls: React.FC<CameraControlsProps> = ({
  onBackPress,
  onCameraSwitchPress,
  onRecordingToggle,
  isRecording,
  navigation,
}) => {
  const { cameraType, setCameraType } = useCameraTypeStore((state) => state);

  return (
    <ScreenContainer styles={styles.cameraContentContainer}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          disabled={isRecording}
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
          disabled={isRecording}
        >
          <FormattedIcon
            name="camera-reverse-outline"
            size="small"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onRecordingToggle}>
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
