import { useRef } from "react";
import { Animated } from "react-native";
import { Shadow } from "react-native-shadow-2";

export const AnimatedShadow = Animated.createAnimatedComponent(Shadow);

export const useAnimation = () => {
  const fadeValue = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    return Animated.timing(fadeValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    });
  };

  const fadeOut = () => {
    return Animated.timing(fadeValue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    });
  };

  return { fadeOut, fadeIn, fadeValue };
};
