import { useEffect, useRef } from "react";
import { ResizeMode, Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useBtnPlayModalStore, useVideoPlayerStore } from "../stateManagement";

export const VideoTutorialController: React.FC<
  VideoTutorialControllerProps
> = ({ onLoadComplete, onLoadInit, videoParameters }) => {
  const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);

  useEffect(() => {
    if (isPlaying && videoRef.current !== null) {
      void videoRef.current.playAsync();
    }
  }, [isPlaying, videoRef.current]);

  const togglePlay: () => void = () => {
    if (videoRef.current != null) {
      if (isPlaying) {
        void videoRef.current.pauseAsync();
      } else {
        void videoRef.current.playAsync();
      }
      setPlaying(!isPlaying);
      toggleBtnPlay();
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.buttonTogglerPlay}
      onPress={togglePlay}
    ></TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonTogglerPlay: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
});

export default VideoTutorialPlayer;
