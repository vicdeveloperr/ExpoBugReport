interface ActionButtonProps {
  name: "continue" | "tryAgaint";
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ name, onPress }) => {
  // ..
};

export default ActionButton;
