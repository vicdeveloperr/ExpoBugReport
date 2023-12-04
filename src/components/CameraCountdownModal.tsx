import { Modal, View, Text } from "react-native";
import { useState, useEffect } from "react";

interface CameraCountdownModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CameraCountdownModal: React.FC<CameraCountdownModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isVisible) {
      timer = setInterval(() => {
        setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isVisible]);

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
