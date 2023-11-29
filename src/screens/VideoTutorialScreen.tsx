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
      <TouchableOpacity onPress={openCamera}>
        <FormattedIcon name="camera" />
      </TouchableOpacity>
      <VideoPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoTutorialScreen;
