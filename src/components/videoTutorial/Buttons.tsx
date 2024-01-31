import VideoTutorialPlayer from "../VideoTutorialPlayer";
import VideoPicker from "../VideoPicker";
import BtnPlay from "./BtnPlay";
import OpenCameraButton from "./OpenCameraButton";
import { View, StyleSheet } from "react-native";
import pickVideoFromGallery from "../../utils/pickVideoFromGallery";

const Buttons: React.FC = () => {
  return (
    <>
      <VideoTutorialPlayer
        onLoadComplete={() => {
          setIsLoading(false);
        }}
      />
      <View style={styles.buttonsContainer}>
        <VideoPicker onPressAction={pickVideoFromGallery} />
        <OpenCameraButton />
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
});

export default Buttons;
