import * as ImagePicker from "expo-image-picker";

type video = ImagePicker.ImagePickerAsset;

const pickVideoFromGallery: () => Promise<video | unknown> = async () => {
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
        return video;
      } else {
        throw new Error("El video seleccionado dura más de 10 segundos");
      }
    }
  } catch (err) {
    return err;
  }
};

export default pickVideoFromGallery;
