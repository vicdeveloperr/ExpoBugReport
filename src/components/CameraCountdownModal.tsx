import { Modal, View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { primaryColor } from "../styles/colors";

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
      <View style={styles.container}>
        <Text style={styles.timer}>{countdown}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    fontSize: 80,
    fontWeight: "bold",
    color: primaryColor,
  },
});

export default CameraCountdownModal;
