import { Modal, View, Text, StyleSheet } from "react-native";

const ProcessingVideoModal: React.FC = () => {
  return (
    <Modal visible={true}>
      <View style={styles.centeredView}>
        <View>
          <Text>Tu pequeño texto aquí</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProcessingVideoModal;
