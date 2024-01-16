import { render, screen } from "@testing-library/react-native";
import CameraView from "../components/camerascreen/CameraView";
import { CameraType } from "expo-camera";
import { View } from "react-native";

describe("<CameraView />", () => {
  it("CameraView se renderiza correctamente", async () => {
    render(
      <CameraView
        isCameraPermissionGranted={true}
        isMicrophonePermissionGranted={true}
        cameraType={CameraType.front}
      >
        <View testID="camera"></View>
      </CameraView>
    );

    const camera = screen.getByTestId("camera");
    expect(camera).toBeDefined();
  });

  it("Redirigir al usuario a la página principal, si no se conceden los permisos necesarios", () => {
    const navigation = { navigate: jest.fn() };

    render(
      <CameraView
        isCameraPermissionGranted={true}
        isMicrophonePermissionGranted={true}
        cameraType={CameraType.front}
        navigation={navigation}
      >
        <View testID="camera"></View>
      </CameraView>
    );

    expect(navigation.navigate).toHaveBeenCalled();
  });
});
