import { Entypo } from "@expo/vector-icons";
import React from "react";
import { primaryColor } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
interface FormattedIconProps {
  name:
    | "controller-stop"
    | "controller-record"
    | "folder-video"
    | "camera"
    | "back";
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
  }
  return (
    <Entypo
      name={name}
      size={iconSize}
      color={primaryColor}
    />
  );
};

export default FormattedIcon;
