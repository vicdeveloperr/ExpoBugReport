import { useRecordedStore } from "../../stateManagement";
import Loader from "../Loader";
import ScreenDarkModal from "../ScreenDarkModal";
import { VideoFullScreen } from "../videoTutorial/VideoFullScreen";
import { useState } from "react";

export const UserMovementVideo = () => {
  const [isLoading, setLoading] = useState(true);
  const { recorded } = useRecordedStore((state) => state);

  return (
    <>
      <ScreenDarkModal>
        <VideoFullScreen
          sourceUri={recorded}
          onLoadComplete={() => setLoading(false)}
        />
      </ScreenDarkModal>
      <Loader isLoading={isLoading} />
    </>
  );
};
