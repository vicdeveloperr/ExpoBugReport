import { View, Text, StyleSheet } from "react-native";
import { primaryColor } from "../../utils/colors";
import { useCountdownStore } from "../../stateManagement/stores";
import ScreenDarkModal from "../ScreenDarkModal";

const CameraCountdownModal: React.FC = () => {
  const { countdown } = useCountdownStore((state) => state);

  return (
    <ScreenDarkModal transparent>
      <View style={styles.container}>
        <Text style={styles.timer}>{countdown}</Text>
      </View>
    </ScreenDarkModal>
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
