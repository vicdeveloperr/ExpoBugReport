import { View, TouchableOpacity, StyleSheet } from "react-native";
import VideoPicker from "../VideoPicker";
import FormattedIcon from "../FormattedIcon";
import { useNavigation } from "@react-navigation/native";
import type { VideoTutorialScreenProps } from "../../screens/VideoTutorialScreen";

const VideoTutorialControls: React.FC = () => {
  const navigation = useNavigation<VideoTutorialScreenProps["navigation"]>();

  function openCamera(): void {
    navigation.navigate("camera");
  }

  return (
    <View style={styles.buttonsContainer}>
      <VideoPicker navigation={navigation} />
      <View style={styles.buttonOpenCameraContainer}>
        <TouchableOpacity onPress={openCamera}>
          <FormattedIcon
            size="big"
            name="camera"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
  },
  buttonOpenCameraContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export default VideoTutorialControls;
