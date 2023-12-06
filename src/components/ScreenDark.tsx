import { StyleSheet, View } from "react-native";

interface ScreenDarkProps {
  children: React.ReactNode;
}

const ScreenDark: React.FC<ScreenDarkProps> = ({ children }) => {
  return <View style={styles.modal}>{children}</View>;
};

const styles = StyleSheet.create({
  modal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
  },
});
export default ScreenDark;
