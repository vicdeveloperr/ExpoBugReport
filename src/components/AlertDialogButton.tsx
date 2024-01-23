import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { primaryColor } from "../utils/colors";
import type { StyleProp, TextStyle } from "react-native";

interface ActionButtonProps {
  text: string;
  containerStyles?: StyleProp<TextStyle>;
}

const AlertDialogButton: React.FC<ActionButtonProps> = ({
  text,
  containerStyles,
}) => {
  return (
    <TouchableOpacity style={containerStyles}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: primaryColor,
  },
});

export default AlertDialogButton;
