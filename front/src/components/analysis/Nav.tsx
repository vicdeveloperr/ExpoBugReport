import { AntDesign } from "@expo/vector-icons";
import { small } from "../../utils/iconSizes";
import { whiteColor } from "../../utils/colors";
import { StyleSheet, View } from "react-native";
import { SpeechAnimation } from "./SpeechAnimation";
import { useStatusBarHeightStore } from "../../stateManagement";

type NavType = () => React.ReactNode;

export const Nav: NavType = () => {
  const { height } = useStatusBarHeightStore((state) => state);

  return (
    <View
      testID="nav"
      style={styles.bg}
    >
      <View
        style={[
          styles.contentContainer,
          { paddingBottom: height ? height : 0 },
        ]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#000",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
