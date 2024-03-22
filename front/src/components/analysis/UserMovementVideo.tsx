import Loader from "../Loader";
import ScreenDarkModal from "../ScreenDarkModal";
import { VideoFullScreen } from "../videoTutorial/VideoFullScreen";
import { useState } from "react";

export const UserMovementVideo = () => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <ScreenDarkModal>
        <VideoFullScreen />
      </ScreenDarkModal>
      <Loader isLoading={isLoading} />
    </>
  );
};
