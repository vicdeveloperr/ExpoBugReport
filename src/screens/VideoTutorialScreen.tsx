import { useState } from "react";
import { View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import FormattedIcon from "../components/FormattedIcon";
import VideoPicker from "../components/VideoPicker";
import ScreenContainer from "../components/ScreenContainer";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";
import centerViewContentStyle from "../utils/centerViewContentStyle";
import {
  useBtnPlayModalStore,
  useVideoPlayerStore,
  useVideoProcessingStore,
} from "../stateManagement/stores";
import ScreenDark from "../components/ScreenDark";

type VideoTutorialProps = {
  navigation: StackNavigationProp<RootStackParamList, "videoTutorial">;
};

const VideoTutorialScreen: React.FC<VideoTutorialProps> = ({ navigation }) => {
  const { isBtnPlayVisible, toggleBtnPlay } = useBtnPlayModalStore(
    (state) => state
  );
  const { setPlaying } = useVideoPlayerStore((state) => state);
  const { isVideoProcessing } = useVideoProcessingStore((state) => state);

  function openCamera() {
    navigation.navigate("camera");
  }

  function playVideo() {
    toggleBtnPlay();
    setPlaying(true);
  }

  return (
    <ScreenContainer styles={styles.container}>
      <VideoTutorialPlayer />
      <View style={styles.buttonsContainer}>
        <VideoPicker />
        <View style={styles.buttonOpenCameraContainer}>
          <TouchableOpacity onPress={openCamera}>
            <FormattedIcon
              size="big"
              name="camera"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Botón de play */}
      {isBtnPlayVisible && (
        <ScreenDark>
          <TouchableOpacity
            style={[styles.buttonPlayVideo, centerViewContentStyle]}
            onPress={playVideo}
          >
            <FormattedIcon name="play" />
          </TouchableOpacity>
        </ScreenDark>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 0,
    display: "flex",
    justifyContent: "flex-end",
  },
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
  buttonPlayVideo: {
    width: "100%",
    height: "100%",
  },
});

export default VideoTutorialScreen;
