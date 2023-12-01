import React from "react";
import { View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import FormattedIcon from "../components/FormattedIcon";
import VideoPicker from "../components/VideoPicker";
import ScreenContainer from "../components/ScreenContainer";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";
import { getStatusBarHeight } from "react-native-status-bar-height";

type VideoTutorialProps = {
  navigation: StackNavigationProp<RootStackParamList, "videoTutorial">;
};

const VideoTutorialScreen: React.FC<VideoTutorialProps> = ({ navigation }) => {
  function openCamera() {
    navigation.navigate("camera");
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 0,
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    bottom: getStatusBarHeight(),
  },
  buttonOpenCamera: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
});

export default VideoTutorialScreen;
