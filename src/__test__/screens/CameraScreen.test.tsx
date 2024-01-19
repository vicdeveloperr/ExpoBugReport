import React from "react";
import { render, screen } from "@testing-library/react-native";
import CameraScreen from "../../screens/CameraScreen";
import { useCountdownStore } from "../../stateManagement/stores";

jest.mock("../../components/camerascreen/CameraControls", () => "View");
jest.mock("../../components/camerascreen/CameraCoundownModal", () => "View");
jest.mock("../../components/camerascreen/CameraView", () => "View");

jest.mock("expo-camera", () => ({
  Camera: {
    useCameraPermissions: () => ["granted"],
    useMicrophonePermissions: () => ["granted"],
  },
}));

jest.mock("../../stateManagement/stores", () => ({
  useCountdownStore: jest.fn().mockReturnValue({
    countdown: 3, // Valor inicial
    startCountdown: jest.fn(),
    resetCountdown: jest.fn(),
  }),
}));

describe("<CameraScreen />", () => {
  it("Renderiza los componentes cuando los permisos están concedidos", () => {
    render(<CameraScreen navigation={{ navigate: jest.fn() }} />);

    // Verifica la presencia de los componentes
    const cameraView = screen.getByTestId("camera-view");
    const cameraControls = screen.getByTestId("camera-controls");
    const cameraCountdownModal = screen.queryByTestId("camera-countdown-modal");

    expect(cameraView).toBeTruthy();
    expect(cameraControls).toBeTruthy();
    expect(cameraCountdownModal).toBeNull(); // No debería renderizarse inicialmente
  });
  it("Al iniciar grabación, CameraScreen inicia el temporizador", () => {
    const { startCountdown } = useCountdownStore();
    expect(startCountdown).toHaveBeenCalled();
  });
});
