import { StyleSheet, View, Modal } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
interface ScreenDarkProps {
  children: React.ReactNode;
  stylesView?: StyleProp<ViewStyle>;
}

const ScreenDarkModal: React.FC<ScreenDarkProps> = ({
  children,
  stylesView,
}) => {
  return (
    <Modal
      visible={true}
      animationType="fade"
    >
      <View style={[styles.modal, stylesView]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScreenDarkModal;
