import { AntDesign } from "@expo/vector-icons";
import { medium, small } from "../../utils/iconSizes";
import { primaryColor, whiteColor } from "../../utils/colors";
import { StyleSheet, View } from "react-native";
import { SpeechAnimation } from "./SpeechAnimation";

type NavType = () => React.ReactNode;

export const Nav: NavType = () => {
  return (
    <View
      testID="nav"
      style={styles.container}
    >
      <AntDesign
        name="home"
        size={small}
        color={whiteColor}
      />
      <SpeechAnimation />
      <AntDesign
        name="back"
        size={small}
        color={whiteColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
