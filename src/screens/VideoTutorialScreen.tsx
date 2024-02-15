import Buttons from "../components/videoTutorial/Buttons";
import { useVideoTutorialLoadingState } from "../stateManagement";
import ScreenContainer from "../components/ScreenContainer";
import Loader from "../components/Loader";
import { StyleSheet } from "react-native";
import { VideoTutorialController } from "../components/VideoTutorialController";
import { VideoTutorial } from "../components/videoTutorial/VideoTutorial";
import { useVideoTutorialControllerAction } from "../components/videoTutorial/hooks/useVideoTutorialControllerAction";

const VideoTutorialScreen: React.FC = () => {
  const { isLoading } = useVideoTutorialLoadingState();
  const { togglePlay } = useVideoTutorialControllerAction();

  return (
    <>
      <ScreenContainer styles={styles.container}>
        <VideoTutorialController onPressAction={togglePlay}>
          <VideoTutorial sourceUri="https://www.pexels.com/es-es/video/hombre-persona-deporte-pelota-5586534/" />
        </VideoTutorialController>
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
