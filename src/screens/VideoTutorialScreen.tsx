import React from "react";
import { View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import FormattedIcon from "../components/FormattedIcon";
import VideoPicker from "../components/VideoPicker";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";

type VideoTutorialProps = {
  navigation: StackNavigationProp<RootStackParamList, "videoTutorial">;
};

const VideoTutorialScreen: React.FC<VideoTutorialProps> = ({ navigation }) => {
  function openCamera() {
    navigation.navigate("camera");
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    top: "87%",
  },
  buttonOpenCamera: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
});

export default VideoTutorialScreen;
