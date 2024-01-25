import { StyleSheet } from "react-native";
import { useState } from "react";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import ScreenContainer from "../components/ScreenContainer";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";
import { useBtnPlayModalStore } from "../stateManagement/";
import Loader from "../components/Loader";
import VideoTutorialControls from "../components/videoTutorialScreen/VideoTutorialControls";
import BtnPlay from "../components/videoTutorialScreen/BtnPlay";

export interface VideoTutorialScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "videoTutorial">;
}

const VideoTutorialScreen: React.FC<VideoTutorialScreenProps> = ({
  navigation,
}) => {
  const { isBtnPlayVisible } = useBtnPlayModalStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <ScreenContainer styles={styles.container}>
        <VideoTutorialPlayer
          onLoadComplete={() => {
            setIsLoading(false);
          }}
        />
        <VideoTutorialControls />
        {isBtnPlayVisible && <BtnPlay />}
      </ScreenContainer>
      {isLoading && <Loader />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 0,
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default VideoTutorialScreen;
