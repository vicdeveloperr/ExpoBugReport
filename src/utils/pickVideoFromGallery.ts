import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useVideoPickerErrorDialogVisibilityStore } from "../stateManagement";
import type { VideoTutorialNavigationObject } from "../components/videoTutorial/VideoTutorial";

const pickVideoFromGallery: () => Promise<void> = async () => {
  const { navigate } = useNavigation<VideoTutorialNavigationObject>();
  const { setVideoPickerErrorDialogVisibility } =
    useVideoPickerErrorDialogVisibilityStore();

  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const video = result.assets[0];
      console.log("Información del video seleccionado:", result);

      if (video.duration != null && video.duration < 10000) {
        navigate("loadVideo");
      } else {
        setVideoPickerErrorDialogVisibility(true);
      }
    }
  } catch (error) {
    console.error("Error al seleccionar el video:", error);
  }
};

export default pickVideoFromGallery;
