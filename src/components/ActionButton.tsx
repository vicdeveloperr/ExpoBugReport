import { TouchableOpacity, Text } from "react-native";
import FormattedIcon from "./FormattedIcon";

interface ActionButtonProps {
  name: "continue" | "tryAgaint";
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ name, onPress }) => {
  const isNameContinue = name === "continue";
  return (
    <TouchableOpacity onPress={onPress}>
      {isNameContinue ? (
        <FormattedIcon
          name="check"
          size="small"
        />
      ) : (
        <FormattedIcon
          name="reload"
          size="small"
        />
      )}
      <Text>{isNameContinue ? "Continuar" : "Volver a intentarlo"}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
