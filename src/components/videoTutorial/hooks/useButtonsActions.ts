import { useNavigation } from "@react-navigation/native";
import {
  useBtnPlayModalStore,
  useVideoPlayerStore,
} from "../../../stateManagement";

export const useButtonsActions = () => {
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);
  const { setPlaying } = useVideoPlayerStore((state) => state);
  const { navigate } = useNavigation();

  function openCamera(): void {
    navigate("camera");
  }

  function playVideo(): void {
    toggleBtnPlay();
    setPlaying(true);
  }
};
