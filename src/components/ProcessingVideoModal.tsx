import { Modal, View, Text, StyleSheet } from "react-native";

const ProcessingVideoModal: React.FC = () => {
  return (
    <Modal visible={true}>
      <View>
        <Text>Tu pequeño texto aquí</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default ProcessingVideoModal;
