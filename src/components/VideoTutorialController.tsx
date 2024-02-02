import type { Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import type { GestureResponderEvent } from "react-native";

interface VideoTutorialControllerProps {
  children: React.ReactElement<Video>;
  onPressAction: (e: GestureResponderEvent) => void;
}

export const VideoTutorialController: React.FC<
  VideoTutorialControllerProps
> = ({ onPressAction, children }) => {
  // const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
  // const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);

  // const togglePlay: () => void = () => {
  //   if (videoRef.current != null) {
  //     if (isPlaying) {
  //       void videoRef.current.pauseAsync();
  //     } else {
  //       void videoRef.current.playAsync();
  //     }
  //     setPlaying(!isPlaying);
  //     toggleBtnPlay();
  //   }
  // };

  return (
    <TouchableWithoutFeedback
      style={styles.buttonTogglerPlay}
      onPress={onPressAction}
    >
      {children}
    </TouchableWithoutFeedback>
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