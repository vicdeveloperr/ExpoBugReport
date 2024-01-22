import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import CameraControls from "../../components/camerascreen/CameraControls";
import useCameraRecordingStore from "../../stateManagement/useCameraRecordingStore";

jest.mock("../../stateManagement/useCameraRecordingStore", () => jest.fn());

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

function renderCameraControls(isRecording: boolean): void {
  useCameraRecordingStore.mockReturnValueOnce({
    isRecording,
    setIsRecording: jest.fn(),
  });
  render(<CameraControls onRecordingToggle={() => {}} />);
}

describe("CameraControls", () => {
  it("Renderiza correctamente todos los botones", async () => {
    renderCameraControls(false);
    await waitFor(() => {
      expect(screen.getByTestId("backButton")).toBeTruthy();
      expect(screen.getByTestId("cameraSwitchButton")).toBeTruthy();
      expect(screen.getByTestId("recordButton")).toBeTruthy();
    });
  });

  it("En el momento de la grabación, se muestra botón para detener grabación", async () => {
    renderCameraControls(true);
    await waitFor(() => {
      expect(screen.getByTestId("stopRecordButton")).toBeDefined();
    });
  });
});
