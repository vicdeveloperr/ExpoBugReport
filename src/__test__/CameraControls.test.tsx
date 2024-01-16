import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import CameraControls from "../components/camerascreen/CameraControls";

describe("CameraControls", () => {
  beforeEach(() => {
    const navigation = { navigate: jest.fn() };
    render(<CameraControls navigation={navigation} />);
  });
  it("renders all icons", () => {
    expect(screen.getByTestId("back-icon")).toBeTruthy();
    expect(screen.getByTestId("camera-switch-icon")).toBeTruthy();
    expect(screen.getByTestId("record-icon")).toBeTruthy();
  });

  it("toggles the record icon when pressed", () => {
    const recordIcon = screen.getByTestId("record-icon");
    const stopRecordIcon = screen.getByTestId("stop-icon");
    fireEvent.press(recordIcon);

    expect(stopRecordIcon).toBeTruthy();

    fireEvent.press(stopRecordIcon);

    expect(recordIcon).toBeTruthy();
  });
});
