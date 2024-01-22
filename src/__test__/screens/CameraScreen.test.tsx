import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import CameraScreen from "../../screens/CameraScreen";
import { useCountdownStore } from "../../stateManagement/stores";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

jest.mock("../../stateManagement/stores", () => ({
  useCountdownStore: jest.fn().mockReturnValue({
    countdown: 3,
    startCountdown: jest.fn(),
    resetCountdown: jest.fn(),
  }),
}));

describe("<CameraScreen />", () => {
  beforeEach(() => {
    const navigation = { navigate: jest.fn(), addListener: jest.fn() };
    render(<CameraScreen navigation={navigation} />);
  });

  it("Renderiza todos sus componentes cuando los permisos están concedidos", async () => {
    await waitFor(() => {
      const cameraView = screen.getByTestId("CameraView");
      const cameraControls = screen.getByTestId("CameraControls");
      const cameraCountdownModal = screen.queryByTestId("CameraCountdownModal");

      expect(cameraView).toBeTruthy();
      expect(cameraControls).toBeTruthy();
      expect(cameraCountdownModal).toBeNull();
    });
  });

  it("Al iniciar grabación, CameraScreen inicia el temporizador y muestra CameraCountdownModal", () => {
    const { startCountdown } = useCountdownStore();
    expect(startCountdown).toHaveBeenCalled();
  });
});
