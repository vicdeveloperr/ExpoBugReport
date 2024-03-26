import { useRecordedStore } from "../../stateManagement";
import useLoaderVisibilityStore from "../../stateManagement/useLoaderVisibilityStore";
import ScreenDarkModal from "../ScreenDarkModal";
import { VideoFullScreen } from "../videoTutorial/VideoFullScreen";
import { View } from "react-native";

export const UserMovementVideo = () => {
  const { setIsLoading } = useLoaderVisibilityStore((state) => state);
  const { recorded } = useRecordedStore((state) => state);

  return (
    <>
      <VideoFullScreen
        sourceUri={
          "https://player.vimeo.com/progressive_redirect/playback/562969203/rendition/540p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=d823a8401b6f5f93bd4e73a4483fd2502327fc034d6f469ba6eb5da972b81ae0"
        }
        onLoadComplete={() => setIsLoading(false)}
      />
      <View testID="UserMovementVideo"></View>
    </>
  );
};
