import { TouchableOpacity, Text } from "react-native";

interface ActionButtonProps {
  name: "continue" | "tryAgaint";
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{name === "continue" ? "Continuar" : "Volver a intentarlo"}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
