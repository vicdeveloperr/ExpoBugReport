import { Modal, View, Text } from "react-native";
import { useState } from "react";

interface CameraCountdownModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CameraCountdownModal: React.FC<CameraCountdownModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [countdown, setCountdown] = useState(3);

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{ padding: 20, backgroundColor: "white", borderRadius: 10 }}
        >
          <Text>{`Cuenta atrás: ${countdown}`}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default CameraCountdownModal;
