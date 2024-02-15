import { videoRef } from "../VideoTutorial";
import { useVideoPlayerStore, useBtnPlayModalStore } from "../../../stateManagement";

type togglePlay = () => void;
type videoTutorialControllerAction = () => {
    togglePlay: togglePlay;
}

export const useVideoTutorialControllerAction: videoTutorialControllerAction = () => {
    const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);

  const togglePlay: togglePlay = () => {
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

  return {togglePlay};
}