import { render, screen, waitFor } from "@testing-library/react-native";
import CameraView from "../../components/camerascreen/CameraView";
import { View } from "react-native";

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

  it("Si no se conceden los permisos necesarios, muestra cuadro de diálogo", async () => {
    await waitFor(() => {
      const alertDialog = screen.getByText("AlertDialog");
      expect(alertDialog).toBeDefined();
    });
  });
});
