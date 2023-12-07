import React, { useEffect, useRef, useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useBtnPlayModalStore } from "../stateManagement/stores";
import { useVideoPlayerStore } from "../stateManagement/stores";

const VideoTutorialPlayer: React.FC = () => {
  const videoRef = useRef<Video>(null);
  const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
      setPlaying(!isPlaying);
      toggleBtnPlay();
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
