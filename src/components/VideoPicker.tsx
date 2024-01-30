import * as ImagePicker from "expo-image-picker";
import FormattedIcon from "./FormattedIcon";
import { TouchableOpacity, StyleSheet } from "react-native";

interface VideoPickerProps {
  onPressAction: () => Promise<void>;
}
const VideoPicker: React.FC<VideoPickerProps> = ({ onPressAction }) => {
  const pickVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const video = result.assets[0];
        console.log("Información del video seleccionado:", result);
        if (video.duration && video.duration < 10000) {
          navigation.navigate("loadVideo");
        } else {
          alert("El vídeo seleccionado debe durar menos de 10 segundos.");
        }
      }
    } catch (error) {
      console.error("Error al seleccionar el video:", error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        void onPressAction();
      }}
      testID="VideoPicker"
    >
      <FormattedIcon
        size="small"
        name="folder-video"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    marginLeft: 9,
    zIndex: 1,
  },
});

export default VideoPicker;
