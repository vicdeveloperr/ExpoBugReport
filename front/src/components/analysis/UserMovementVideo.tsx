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
      <ScreenDarkModal>
        <VideoFullScreen
          sourceUri={recorded}
          onLoadComplete={() => setIsLoading(false)}
        />
      </ScreenDarkModal>
      <View testID="UserMovementVideo"></View>
    </>
  );
};
