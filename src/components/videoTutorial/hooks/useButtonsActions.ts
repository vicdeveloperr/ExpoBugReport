import { useNavigation } from "@react-navigation/native";
import {
  useBtnPlayModalStore,
  useVideoPlayerStore,
} from "../../../stateManagement";
import type { VideoTutorialNavigationObject } from "../VideoTutorial";
import pickVideoFromGallery from "../../../utils/pickVideoFromGallery";

type ButtonsActions = () => {
  openCamera: () => void;
  playVideo: () => void;
  pickVideo: () => Promise<void>;
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

  async function pickVideo(): Promise<void> {
    await pickVideoFromGallery()
      .then(() => {
        navigate("loadVideo");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { playVideo, openCamera, pickVideo };
};
