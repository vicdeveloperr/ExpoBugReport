import { View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import ScreenDark from "../components/ScreenDark";

const LoadVideoScreen = () => {
  return (
    <View>
      <Video
        source={{
          uri: "https://player.vimeo.com/external/467436330.sd.mp4?s=76304706368278640ac086aa2232c50327b2491e&profile_id=165&oauth2_token_id=57447761",
        }}
        resizeMode={ResizeMode.STRETCH}
        isLooping
        shouldPlay
      />
      <ScreenDark></ScreenDark>
    </View>
  );
};

export default LoadVideoScreen;
