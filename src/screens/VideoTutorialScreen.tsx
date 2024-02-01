import Buttons from "../components/videoTutorial/Buttons";
import VideoTutorial from "../components/videoTutorial/VideoTutorial";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";
import { useVideoTutorialLoadingState } from "../stateManagement";

const VideoTutorialScreen: React.FC = () => {
  const { setIsLoading } = useVideoTutorialLoadingState();

  return (
    <VideoTutorial>
      <VideoTutorialPlayer
        onLoadComplete={() => {
          setIsLoading(false);
        }}
      />
      <Buttons />
    </VideoTutorial>
  );
};

export default VideoTutorialScreen;
