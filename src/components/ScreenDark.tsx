import { StyleSheet, View } from "react-native";
const ScreenDark: React.FC = () => {
  return <View style={styles.modal}></View>;
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
