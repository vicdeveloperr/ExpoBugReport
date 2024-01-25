import { StyleSheet } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../navigation/StackNavigator";
import ScreenContainer from "../components/ScreenContainer";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";
import Loader from "../components/Loader";
import VideoTutorialControls from "../components/videoTutorialScreen/VideoTutorialControls";
import { useLoaderVisibilityStore } from "../stateManagement";

export type VideoTutorialNavigationObject = StackNavigationProp<
  RootStackParamList,
  "videoTutorial"
>;
interface VideoTutorialScreenProps {
  children?: React.ReactNode;
}

const VideoTutorialScreen: React.FC<VideoTutorialScreenProps> = ({
  children,
}) => {
  const { setIsLoading } = useLoaderVisibilityStore((state) => state);

  return (
    <>
      <ScreenContainer styles={styles.container}>
        <VideoTutorialPlayer
          onLoadComplete={() => {
            setIsLoading(false);
          }}
        />
        <VideoTutorialControls />
      </ScreenContainer>
      <Loader />
      {children}
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
