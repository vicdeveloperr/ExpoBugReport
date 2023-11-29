import React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import FormattedIcon from "../components/FormattedIcon";
import VideoPicker from "../components/VideoPicker";
import VideoPlayer from "../components/VideoTutorialPlayer";

type VideoTutorialProps = {
  navigation: StackNavigationProp<RootStackParamList, "videoTutorial">;
};

const VideoTutorialScreen: React.FC<VideoTutorialProps> = ({ navigation }) => {
  function openCamera() {
    navigation.navigate("camera");
  }

  return (
    <View>
      <VideoTutorialPlayer />
      <TouchableOpacity onPress={openCamera}>
        <FormattedIcon name="camera" />
      </TouchableOpacity>
      <VideoPicker />
    </View>
  );
};

export default VideoTutorialScreen;
