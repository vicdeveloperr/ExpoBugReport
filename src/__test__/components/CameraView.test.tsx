import { render, screen, waitFor } from "@testing-library/react-native";
import CameraView from "../../components/camerascreen/CameraView";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("<CameraView />", () => {
  const { navigate } = useNavigation();
  function renderCameraView(
    isCameraPermissionGranted: boolean,
    isMicrophonePermissionGranted: boolean
  ): void {
    render(
      <CameraView
        isCameraPermissionGranted={isCameraPermissionGranted}
        isMicrophonePermissionGranted={isMicrophonePermissionGranted}
      >
        <View testID="camera">Camera</View>
      </CameraView>
    );
  }

  it("CameraView se renderiza correctamente", async () => {
    renderCameraView(true, true);
    await waitFor(() => {
      const camera = screen.getByTestId("camera");
      expect(camera).toBeDefined();
    });
  });

  it("Redirigir al usuario a la página principal, si no se conceden los permisos necesarios", async () => {
    renderCameraView(false, false);
    await waitFor(() => {
      expect(navigate).toHaveBeenCalled();
    });
  });
});
