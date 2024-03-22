import { StyleSheet } from "react-native";
import { AnimatedSpeech } from "./AnimatedSpeech";
import { Shadow } from "react-native-shadow-2";

export const SpeechAnimation: React.FC = () => {
  return (
    <Shadow
      startColor="#000"
      style={[styles.container]}
      distance={15}
    >
      <AnimatedSpeech />
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: 110,
    height: 110,
    borderWidth: 10,
    borderColor: "#000",
  },
});
