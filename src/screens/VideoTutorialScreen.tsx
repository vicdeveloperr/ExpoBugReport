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
        <TouchableOpacity onPress={openCamera}>
          <FormattedIcon
            size="medium"
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
    flexDirection: "row",
    position: "absolute",
    top: "87%",
  },
});

export default VideoTutorialScreen;
