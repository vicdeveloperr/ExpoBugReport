import { Modal, View, Text, StyleSheet } from "react-native";
import { darkColor } from "../utils/colors";

const ProcessingVideo: React.FC = () => {
  return (
    <Modal
      visible={true}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.textBold, styles.text]}>
            Estamos analizando su vídeo
          </Text>
          <Text style={[styles.text]}>Aguarde unos instantes...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: darkColor,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    color: "#fff",
  },
});

export default ProcessingVideo;
