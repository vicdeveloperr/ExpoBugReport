import VideoTutorialPlayer from "../VideoTutorialPlayer";
import VideoPicker from "../VideoPicker";
import BtnPlay from "./BtnPlay";
import OpenCameraButton from "./OpenCameraButton";
import { View, StyleSheet } from "react-native";
import pickVideoFromGallery from "../../utils/pickVideoFromGallery";
import {
  useBtnPlayModalStore,
  useVideoTutorialLoadingState,
} from "../../stateManagement";
import { useButtonsActions } from "./hooks/useButtonsActions";

const Buttons: React.FC = () => {
  const { isBtnPlayVisible } = useBtnPlayModalStore((state) => state);
  const { setIsLoading } = useVideoTutorialLoadingState();
  const {openCamera, playVideo} = useButtonsActions();

  return (
    <>
      <VideoTutorialPlayer
        onLoadComplete={() => {
          setIsLoading(false);
        }}
      />
      <View style={styles.buttonsContainer}>
        <VideoPicker onPressAction={pickVideoFromGallery} />
        <OpenCameraButton onPressAction={openCamera} />
      </View>
      {isBtnPlayVisible && <BtnPlay onPressAction={playVideo} />}
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
