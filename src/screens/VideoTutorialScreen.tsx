import { useState } from "react";
import ScreenContainer from "../components/ScreenContainer";
import { useBtnPlayModalStore, useVideoPlayerStore } from "../stateManagement/";
import Loader from "../components/Loader";

export interface VideoTutorialScreenProps {
  children: React.ReactElement;
}

const VideoTutorialScreen: React.FC<VideoTutorialScreenProps> = ({
  children,
}) => {
  const { isBtnPlayVisible, toggleBtnPlay } = useBtnPlayModalStore(
    (state) => state
  );
  const { setPlaying } = useVideoPlayerStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  function openCamera(): void {
    navigation.navigate("camera");
  }

  function playVideo(): void {
    toggleBtnPlay();
    setPlaying(true);
  }

  return (
    <>
      <ScreenContainer styles={styles.container}>
        {children}
        {/* <VideoTutorialPlayer
          onLoadComplete={() => {
            setIsLoading(false);
          }}
        />
        <View style={styles.buttonsContainer}>
          <VideoPicker navigation={navigation} />
          <View style={styles.buttonOpenCameraContainer}>
            <TouchableOpacity onPress={openCamera}>
              <FormattedIcon
                size="big"
                name="camera"
              />
            </TouchableOpacity>
          </View>
        </View>
        
        {isBtnPlayVisible && (
          <ScreenDark>
            <TouchableOpacity
              style={[styles.buttonPlayVideo, centerViewContentStyle]}
              onPress={playVideo}
            >
              <FormattedIcon name="play" />
            </TouchableOpacity>
          </ScreenDark>
        )} */}
      </ScreenContainer>
      {isLoading && <Loader />}
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     paddingTop: 0,
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   buttonsContainer: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     zIndex: 1,
//   },
//   buttonOpenCameraContainer: {
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//   },
//   buttonPlayVideo: {
//     width: "100%",
//     height: "100%",
//   },
// });

export default VideoTutorialScreen;
