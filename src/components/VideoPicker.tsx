import React, { useState, useEffect } from "react";
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import FormattedIcon from "./FormattedIcon";
import uploadVideo from "../utils/uploadVideo";

const VideoPicker: React.FC = () => {
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
        uploadVideo(video.uri);
      }
    } catch (error) {
      console.error("Error al seleccionar el video:", error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => pickVideo()}
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
