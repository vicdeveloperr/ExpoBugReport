import React from "react";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import CameraControls from "../components/camerascreen/CameraControls";

describe("CameraControls", () => {
  function renderComponent(isRecording: boolean): void {
    render(
      <CameraControls
        isRecording={isRecording}
        onRecordingToggle={() => {
          isRecording = !isRecording;
        }}
      />
    );
  }

  it("Renderiza correctamente todos los botones", async () => {
    renderComponent(false);
    await waitFor(() => {
      expect(screen.getByTestId("backButton")).toBeTruthy();
      expect(screen.getByTestId("cameraSwitchButton")).toBeTruthy();
      expect(screen.getByTestId("recordButton")).toBeTruthy();
    });
  });

  it("En el momento de la grabación, se muestra botón para detener grabación", async () => {
    renderComponent(true);
    await waitFor(() => {
      expect(screen.getByTestId("stopRecordButton")).toBeDefined();
    });
  });
});
