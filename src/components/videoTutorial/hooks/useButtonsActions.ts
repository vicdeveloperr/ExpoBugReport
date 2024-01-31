import { useNavigation } from "@react-navigation/native";
import {
  useBtnPlayModalStore,
  useVideoPlayerStore,
} from "../../../stateManagement";
import type { VideoTutorialNavigationObject } from "../../../screens/VideoTutorialScreen";

type ButtonsActions = () => {
  openCamera: () => void;
  playVideo: () => void;
};

export const useButtonsActions: ButtonsActions = () => {
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);
  const { setPlaying } = useVideoPlayerStore((state) => state);
  const { navigate } = useNavigation<VideoTutorialNavigationObject>();

  function openCamera(): void {
    navigate("camera");
  }

  function playVideo(): void {
    toggleBtnPlay();
    setPlaying(true);
  }

  return { playVideo, openCamera };
};
