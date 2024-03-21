import { View, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

export const SpeechAnimation: React.FC = () => {
  return (
    <Shadow
      startColor="#000"
      style={styles.content}
      distance={15}
    >
    </Shadow>
  );
};

const styles = StyleSheet.create({
  content: {
    borderRadius: 100,
    width: 110,
    height: 110,
    borderWidth: 10,
    borderColor: "#000",
  },
});
