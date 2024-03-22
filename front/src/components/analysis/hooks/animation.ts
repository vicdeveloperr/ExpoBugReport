import { useRef } from "react";
import { Animated } from "react-native";
import type { Animated as AnimatedType } from "react-native";
import { Shadow } from "react-native-shadow-2";

type fadeAnimation = (initValue: AnimatedType.Value) => void;

export const AnimatedShadow = Animated.createAnimatedComponent(Shadow);

export const fadeIn: fadeAnimation = (initValue) => {
  Animated.timing(initValue, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  });
};

export const useFadeOut: fadeAnimation = (initValue) => {
  Animated.timing(initValue, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: true,
  });
};
