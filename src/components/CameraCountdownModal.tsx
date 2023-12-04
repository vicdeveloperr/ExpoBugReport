import { Modal, View, Text } from "react-native";
import { useState, useEffect } from "react";

const CameraCountdownModal: React.FC = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setInterval(() => {
    setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Modal
      visible={true}
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
