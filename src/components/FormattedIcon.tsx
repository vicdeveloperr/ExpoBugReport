import { Entypo } from "@expo/vector-icons";
import React from "react";
import { primaryColor } from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
interface FormattedIconProps {
  name: "controller-stop" | "controller-record" | "folder-video" | "camera";
}
const FormattedIcon: React.FC<FormattedIconProps> = ({ name }) => {
  if (name === "camera") {
    return (
      <MaterialIcons
        name="camera"
        size={74}
        color={primaryColor}
      />
    );
  }
  return (
    <Entypo
      name={name}
      size={74}
      color={primaryColor}
    />
  );
};

export default FormattedIcon;
