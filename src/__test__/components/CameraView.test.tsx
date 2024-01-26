import { render, screen, waitFor } from "@testing-library/react-native";
import CameraView from "../../components/camerascreen/CameraView";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

describe("<CameraView />", () => {
  beforeEach(() => {
    render(
      <CameraView>
        <View testID="camera">Camera</View>
      </CameraView>
    );
  });

  it("CameraView se renderiza correctamente", async () => {
    await waitFor(() => {
      const camera = screen.getByTestId("camera");
      expect(camera).toBeDefined();
    });
  });

  it("Si no se conceden los permisos necesarios, redirije al usuario de vuelta al video tutorial", async () => {
    const {navigate} = useNavigation();
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("videoTutorial")
    });
  });
});
