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
} from "../stateManagement/stores";

type VideoTutorialProps = {
  navigation: StackNavigationProp<RootStackParamList, "videoTutorial">;
};

const VideoTutorialScreen: React.FC<VideoTutorialProps> = ({ navigation }) => {
  const { isBtnPlayVisible, toggleBtnPlay } = useBtnPlayModalStore(
    (state) => state
  );
  const { setPlaying } = useVideoPlayerStore((state) => state);

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
        <TouchableOpacity
          style={styles.buttonOpenCamera}
          onPress={openCamera}
        >
          <FormattedIcon
            size="big"
            name="camera"
          />
        </TouchableOpacity>
      </View>
      {/* Botón de pausa */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isBtnPlayVisible}
      >
        <View style={centerViewContentStyle}>
          <TouchableOpacity onPress={playVideo}>
            <FormattedIcon name="play" />
          </TouchableOpacity>
        </View>
      </Modal>
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
  },
  buttonOpenCamera: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export default VideoTutorialScreen;
