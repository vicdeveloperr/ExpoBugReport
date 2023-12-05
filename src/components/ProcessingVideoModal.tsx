import { Modal, View, Text, StyleSheet } from "react-native";
import { darkColor } from "../utils/colors";

const ProcessingVideoModal: React.FC = () => {
  return (
    <Modal visible={true}>
      <View style={styles.container}>
        <Text style={[styles.textBold, styles.text]}>
          Estamos analizando su vídeo
        </Text>
        <Text style={[styles.text]}>Aguarde unos instantes...</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkColor,
    paddingVertical: 40,
    paddingHorizontal: 10
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

export default ProcessingVideoModal;
