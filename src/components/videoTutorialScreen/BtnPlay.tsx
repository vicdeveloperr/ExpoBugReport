import ScreenDarkModal from "../ScreenDarkModal";
import { StyleSheet, TouchableOpacity } from "react-native";
import FormattedIcon from "../FormattedIcon";
import { centerViewContentStyle } from "../../utils/genericStyles";
import {
  useBtnPlayModalStore,
  useVideoPlayerStore,
} from "../../stateManagement";

const BtnPlay: React.FC = () => {
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);
  const { setPlaying } = useVideoPlayerStore((state) => state);

  function playVideo(): void {
    toggleBtnPlay();
    setPlaying(true);
  }

  return (
    <ScreenDarkModal>
      <TouchableOpacity
        style={[styles.buttonPlayVideo, centerViewContentStyle]}
        onPress={playVideo}
      >
        <FormattedIcon name="play" />
      </TouchableOpacity>
    </ScreenDarkModal>
  );
};

const styles = StyleSheet.create({
  buttonPlayVideo: {
    width: "100%",
    height: "100%",
  },
});

export default BtnPlay;
