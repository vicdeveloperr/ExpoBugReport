import Buttons from "../components/videoTutorial/Buttons";
import VideoTutorialPlayer from "../components/VideoTutorialController";
import { useVideoTutorialLoadingState } from "../stateManagement";
import ScreenContainer from "../components/ScreenContainer";
import Loader from "../components/Loader";
import { StyleSheet } from "react-native";

const VideoTutorialScreen: React.FC = () => {
  const { setIsLoading, isLoading } = useVideoTutorialLoadingState();

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
      <Loader isLoading={isLoading} />
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
