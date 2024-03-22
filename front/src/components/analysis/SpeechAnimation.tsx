import { StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { AnimatedShadow, fadeIn, useFadeOut } from "./hooks/animation";

interface SpeechAnimationProps {
  fadeValue: Animated.Value;
}
export const SpeechAnimation: React.FC<SpeechAnimationProps> = ({
  fadeValue,
}) => {
  return (
    <AnimatedShadow
      startColor="#000"
      style={[styles.container]}
      distance={15}
    >
      <Animated.View
        style={[styles.content, { opacity: fadeValue }]}
      ></Animated.View>
    </AnimatedShadow>
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
  content: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
  },
});
