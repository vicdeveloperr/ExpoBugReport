import React, { useRef, useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Entypo } from "@expo/vector-icons";
import FormattedIcon from "../components/FormattedIcon";
import ScreenContainer from "../components/ScreenContainer";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
  const cameraRef = useRef<Camera>(null);
  const [isRecording, setRecording] = useState(false);
  const [isScreenDark, setScreenDark] = useState(false); // Nuevo estado
  const [statusCameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [statusMicrophonePermission, requestMicrophonePermission] =
    Camera.useMicrophonePermissions();
  const navigation = useNavigation();

  useEffect(() => {
    requestCameraPermission();
    requestMicrophonePermission();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      try {
        setRecording(true);
        setScreenDark(false); // Asegurarse de que la pantalla no esté oscura al iniciar la grabación
        const { uri } = await cameraRef.current.recordAsync();
        console.log("Video grabado:", uri);
      } catch (error) {
        console.error("Error al iniciar la grabación:", error);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current) {
      try {
        await cameraRef.current.stopRecording();
        setRecording(false);
        setScreenDark(true); // Activar la pantalla oscura al detener la grabación
      } catch (error) {
        console.error("Error al detener la grabación:", error);
      }
    }
  };

  if (statusCameraPermission && statusMicrophonePermission) {
    return (
      <>
        <Camera
          style={{ flex: 1 }}
          ref={cameraRef}
          type={CameraType.front}
        >
          <ScreenContainer styles={styles.cameraContentContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.buttonGoBack}
            >
              <FormattedIcon
                name="back"
                size="small"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? (
                <FormattedIcon name="controller-stop" />
              ) : (
                <FormattedIcon name="controller-record" />
              )}
            </TouchableOpacity>
          </ScreenContainer>
        </Camera>
        {isScreenDark && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          />
        )}
      </>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  buttonGoBack: {
    alignSelf: "flex-start",
  },
  cameraContentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CameraScreen;
