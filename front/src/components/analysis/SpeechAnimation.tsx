import { StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { AnimatedShadow, fadeIn, fadeOut } from "./hooks/animation";

export const SpeechAnimation: React.FC = () => {
  const fadeValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeIn(fadeValue);
  });

  return (
    <AnimatedShadow
      startColor="#000"
      style={[styles.content, { opacity: fadeValue }]}
      distance={15}
    ></AnimatedShadow>
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
