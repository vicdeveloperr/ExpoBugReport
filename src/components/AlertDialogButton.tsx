import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { primaryColor } from "../utils/colors";

interface ActionButtonProps {
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: primaryColor,
  },
});

export default ActionButton;
