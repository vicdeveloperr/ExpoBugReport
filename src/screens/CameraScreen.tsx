import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import FormattedIcon from "../components/FormattedIcon";
import ScreenContainer from "../components/ScreenContainer";
import { useNavigation } from "@react-navigation/native";
import CameraCountdownModal from "../components/CameraCountdownModal";
import {
  useCountdownStore,
  useVideoProcessingStore,
} from "../stateManagement/stores";
import uploadVideo from "../utils/uploadVideo";
import ScreenDark from "../components/ScreenDark";
import ProcessingVideo from "../components/ProcessingVideo";

const CameraScreen = () => {
  const cameraRef = useRef<Camera>(null);
  const [isRecording, setRecording] = useState(false);
  const [statusCameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [statusMicrophonePermission, requestMicrophonePermission] =
    Camera.useMicrophonePermissions();
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const { startCountdown, resetCountdown } = useCountdownStore(
    (state) => state
  );
  const navigation = useNavigation();
  const { isVideoProcessing, setIsVideoProcessing } = useVideoProcessingStore(
    (state) => state
  );

  useEffect(() => {
    requestCameraPermission();
    requestMicrophonePermission();

    return () => {
      resetCountdown();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (event) => {
      if (isRecording) {
        event.preventDefault();
        alert("Grabación en curso");
      }
    });

    return () => unsubscribe();
  }, [isRecording]);

  const startRecording = async () => {
    if (cameraRef.current) {
      setIsTimerVisible(true);
      startCountdown(onFinishCountdown);

      function onFinishCountdown() {
        setIsTimerVisible(false);
        setRecording(true);
      }

      const recordAsyncResponse = await cameraRef.current
        .recordAsync({
          maxDuration: 10,
        })
        .then(({ uri }) => {
          stopRecording();
          uploadVideo(uri);
          setIsVideoProcessing(true);
          console.log("Video grabado:", uri);
        })
        .catch((error) => {
          console.error("Error al iniciar la grabación:", error);
        });
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
      resetCountdown();
      setRecording(false);
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
              disabled={isRecording}
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
        {isVideoProcessing && <ProcessingVideo />}
        {isTimerVisible && (
          <ScreenDark>
            <CameraCountdownModal />
          </ScreenDark>
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
