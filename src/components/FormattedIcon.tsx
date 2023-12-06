import { Entypo } from "@expo/vector-icons";
import { primaryColor } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

interface FormattedIconProps {
  name:
    | "controller-stop"
    | "controller-record"
    | "folder-video"
    | "camera"
    | "back"
    | "pause"
    | "play";
  size?: "big" | "medium" | "small";
}
const FormattedIcon: React.FC<FormattedIconProps> = ({ name, size }) => {
  const iconSize = size === "medium" ? 57 : size === "small" ? 44 : 74;
  if (name === "camera") {
    return (
      <MaterialIcons
        name="camera"
        size={iconSize}
        color={primaryColor}
      />
    );
  } else if (name === "back") {
    return (
      <AntDesign
        name="back"
        size={iconSize}
        color={primaryColor}
      />
    );
  } else if (name === "play" || name === "pause") {
    return (
      <Feather
        name={name}
        size={iconSize}
        color={primaryColor}
      />
    );
  } else {
    return (
      <Entypo
        name={name}
        size={iconSize}
        color={primaryColor}
      />
    );
  }
};

export default FormattedIcon;
