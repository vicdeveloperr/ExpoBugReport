import Buttons from "../components/videoTutorial/Buttons";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";
import { useVideoTutorialLoadingState } from "../stateManagement";
import ScreenContainer from "../components/ScreenContainer";
import Loader from "../components/Loader";
import { StyleSheet } from "react-native";

const VideoTutorialScreen: React.FC = () => {
  const { setIsLoading } = useVideoTutorialLoadingState();

  return (
    <>
      <ScreenContainer styles={styles.container}>
        <VideoTutorialPlayer
          onLoadComplete={() => {
            setIsLoading(false);
          }}
        />
        <Buttons />
      </ScreenContainer>
      <Loader />
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
