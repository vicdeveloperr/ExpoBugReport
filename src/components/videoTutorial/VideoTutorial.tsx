import ScreenContainer from "../ScreenContainer";
import Loader from "../Loader";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../navigation/StackNavigator";
import { StyleSheet } from "react-native";
import { useVideoTutorialLoadingState } from "../../stateManagement";

interface VideoTutorialProps {
  children: React.ReactElement;
}

export type VideoTutorialNavigationObject = StackNavigationProp<
  RootStackParamList,
  "videoTutorial"
>;

const VideoTutorial: React.FC<VideoTutorialProps> = ({ children }) => {
  const { isLoading } = useVideoTutorialLoadingState((state) => state);

  return (
    <>
      <ScreenContainer styles={styles.container}>{children}</ScreenContainer>
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

export default VideoTutorial;
