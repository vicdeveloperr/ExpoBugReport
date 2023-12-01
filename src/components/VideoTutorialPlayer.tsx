import React, { useRef, useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

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
        resizeMode={ResizeMode.STRETCH}
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
    ...StyleSheet.absoluteFillObject,
  },
  buttonTogglerPlay: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
});

export default VideoTutorialPlayer;
