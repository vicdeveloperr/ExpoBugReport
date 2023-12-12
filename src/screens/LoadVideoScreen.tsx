import { View, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import ScreenDark from "../components/ScreenDark";
import ScreenContainer from "../components/ScreenContainer";
import ActionButton from "../components/ActionButton";

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
      <ScreenDark>
        <ScreenContainer>
            <Text>Video Grabado</Text>
            <Text>Desea procesarlo?</Text>
            <ActionButton name="continue" onPress={() => undefined} />
            <ActionButton name="tryAgaint" onPress={() => undefined} />
        </ScreenContainer>
      </ScreenDark>
    </View>
  );
};

export default LoadVideoScreen;
