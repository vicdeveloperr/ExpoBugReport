import VideoTutorialPlayer from "../VideoTutorialPlayer";
import VideoPicker from "../VideoPicker";
import BtnPlay from "./BtnPlay";
import OpenCameraButton from "./OpenCameraButton";
import { View, StyleSheet } from "react-native";
import pickVideoFromGallery from "../../utils/pickVideoFromGallery";
import { useVideoTutorialLoadingState } from "../../stateManagement";
import { useButtonsActions } from "./hooks/useButtonsActions";

interface ButtonsProps {
  children?: React.ReactNode;
}

const Buttons: React.FC<ButtonsProps> = ({ children }) => {
  const { setIsLoading } = useVideoTutorialLoadingState();
  const { openCamera, playVideo } = useButtonsActions();

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
      <BtnPlay onPressAction={playVideo} />
      {children}
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
