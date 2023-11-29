import React, { useRef, useState } from "react";
import { Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

const VideoTutorialPlayer: React.FC = () => {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
      setPlaying(!isPlaying);
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.buttonTogglerPlay}
      onPress={togglePlay}
    >
      <Video
        ref={videoRef}
        source={require("../assets/video-1-vs-1-basketball.mp4")}
        style={styles.video}
        isLooping
        shouldPlay
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
  buttonTogglerPlay: {
    flex: 1,
  },
});

export default VideoTutorialPlayer;
