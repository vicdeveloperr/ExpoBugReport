import { View, TouchableOpacity, StyleSheet } from "react-native";
import VideoPicker from "../VideoPicker";
import FormattedIcon from "../FormattedIcon";
import { useNavigation } from "@react-navigation/native";
import type { VideoTutorialScreenProps } from "../../screens/VideoTutorialScreen";
import { useBtnPlayModalStore } from "../../stateManagement";
import BtnPlay from "./BtnPlay";

const VideoTutorialControls: React.FC = () => {
  const navigation = useNavigation<VideoTutorialScreenProps["navigation"]>();
  const { isBtnPlayVisible } = useBtnPlayModalStore((state) => state);

  function openCamera(): void {
    navigation.navigate("camera");
  }

  return (
    <>
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
      {isBtnPlayVisible && <BtnPlay />}
    </>
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
