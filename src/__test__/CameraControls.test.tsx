import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import CameraControls from "../components/camerascreen/CameraControls";

describe("CameraControls", () => {
  beforeEach(() => {
    const navigation = { navigate: jest.fn() };
    let isRecording = false;
    render(
      <CameraControls
        isRecording={isRecording}
        onRecordingToggle={() => {
          isRecording = !isRecording;
        }}
        navigation={navigation}
      />
    );
  });
  it("Renderiza correctamente todos los botones", () => {
    expect(screen.getByTestId("backButton")).toBeTruthy();
    expect(screen.getByTestId("cameraSwitchButton")).toBeTruthy();
    expect(screen.getByTestId("recordButton")).toBeTruthy();
  });

  it("Altena entre los botones de grabar y detener grabación, al pulsar", () => {
    const recordIcon = screen.getByTestId("recordButton");
    const stopRecordIcon = screen.getByTestId("stopRecordButton");
    fireEvent.press(recordIcon);

    expect(stopRecordIcon).toBeTruthy();

    fireEvent.press(stopRecordIcon);

    expect(recordIcon).toBeTruthy();
  });
});
