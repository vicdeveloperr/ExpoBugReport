import { StyleSheet, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
interface ScreenDarkProps {
  children: React.ReactNode;
  stylesView?: StyleProp<ViewStyle>;
}

const ScreenDark: React.FC<ScreenDarkProps> = ({ children, stylesView }) => {
  return <View style={[styles.modal, stylesView]}>{children}</View>;
};

const styles = StyleSheet.create({
  modal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScreenDark;
