import React from "react";
import { render, screen } from "@testing-library/react-native";
import CameraScreen from "../../screens/CameraScreen";

jest.mock("expo-camera", () => ({
  Camera: {
    useCameraPermissions: () => ({
      status: "granted",
    }),
    useMicrophonePermissions: () => ({
      status: "granted",
    }),
  },
}));

jest.mock("../stateManagement/stores", () => ({
  useCountdownStore: jest.fn(),
}));

test("Renderiza los componentes cuando los permisos están concedidos", () => {
  render(<CameraScreen navigation={{ navigate: jest.fn() }} />);

  // Verifica la presencia de los componentes
  const cameraView = screen.getByTestId("camera-view");
  const cameraControls = screen.getByTestId("camera-controls");
  const cameraCountdownModal = screen.queryByTestId("camera-countdown-modal");

  expect(cameraView).toBeTruthy();
  expect(cameraControls).toBeTruthy();
  expect(cameraCountdownModal).toBeNull(); // No debería renderizarse inicialmente
});
