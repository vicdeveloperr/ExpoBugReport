import { AntDesign } from "@expo/vector-icons";
import { medium } from "../../utils/iconSizes";
import { primaryColor } from "../../utils/colors";
import { View } from "react-native";
import { SpeechAnimation } from "./SpeechAnimation";

type NavType = () => React.ReactNode;

export const Nav: NavType = () => {
  return (
    <View testID="nav">
      <AntDesign
        name="home"
        size={medium}
        color={primaryColor}
      />
      <SpeechAnimation />
      <AntDesign
        name="back"
        size={medium}
        color={primaryColor}
      />
    </View>
  );
};
