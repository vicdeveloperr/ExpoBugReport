import { Modal, View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { primaryColor } from "../styles/colors";
import { useCountdownStore } from "../stateManagement/stores";

const CameraCountdownModal: React.FC = () => {
  const { countdown, substractCountdown } = useCountdownStore((state) => state);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    timer = setInterval(() => {
      substractCountdown();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Modal
      visible={countdown > 0 ? true : false}
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
