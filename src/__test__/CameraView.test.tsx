import { render, screen } from "@testing-library/react-native";
import CameraView from "../components/camerascreen/CameraView";
import { CameraType } from "expo-camera";
import { View } from "react-native";

describe("<CameraView />", () => {
  const navigation = { navigate: jest.fn() };

  beforeEach(() => {
    render(
      <CameraView
        isCameraPermissionGranted={false}
        isMicrophonePermissionGranted={false}
        cameraType={CameraType.front}
        navigation={navigation}
      >
        <View testID="camera"></View>
      </CameraView>
    );
  });
  
  it("CameraView se renderiza correctamente", async () => {
    const camera = screen.getByTestId("camera");
    expect(camera).toBeDefined();
  });

  it("Redirigir al usuario a la página principal, si no se conceden los permisos necesarios", () => {
    expect(navigation.navigate).toHaveBeenCalled();
  });
});
