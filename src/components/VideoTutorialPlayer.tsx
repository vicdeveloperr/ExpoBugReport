import React, { useRef, useState } from "react";
import { Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

const VideoPlayer: React.FC = () => {
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
    <TouchableWithoutFeedback onPress={togglePlay}>
      <Video
        ref={videoRef}
        source={{ uri: "tu_url_del_video.mp4" }}
        style={styles.video}
        isLooping
        shouldPlay
      />
    </TouchableWithoutFeedback>
  );
};

export default VideoPlayer;
