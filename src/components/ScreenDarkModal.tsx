import { StyleSheet, View, Modal } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
interface ScreenDarkProps {
  children: React.ReactNode;
  stylesView?: StyleProp<ViewStyle>;
  transparent?: boolean;
}

const ScreenDarkModal: React.FC<ScreenDarkProps> = ({
  children,
  stylesView,
  transparent,
}) => {
  return (
    <View style={[styles.modal, stylesView]}>
      <Modal
        visible={true}
        animationType="fade"
        transparent={transparent !== undefined ? transparent : true}
      >
        {children}
      </Modal>
    </View>
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
