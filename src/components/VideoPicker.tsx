import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import FormattedIcon from "./FormattedIcon";

const VideoPicker: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<
    ImagePicker.ImagePickerAsset[] | null
  >(null);

  const pickVideo = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        console.log("Información del video seleccionado:", result);
        setSelectedVideo(result.assets);
      }
    } catch (error) {
      console.error("Error al seleccionar el video:", error);
    }
  };

  return (
    <TouchableOpacity onPress={() => pickVideo()}>
      <FormattedIcon name="folder-video" />
    </TouchableOpacity>
  );
};

export default VideoPicker;
