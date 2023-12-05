import { Modal, View, Text, StyleSheet } from "react-native";

const ProcessingVideoModal: React.FC = () => {
  return (
    <Modal visible={true}>
      <View>
        <View>
          <Text>Tu pequeño texto aquí</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ProcessingVideoModal;
