// Cámara se renderiza
// Cámara frontal se renderiza
// Se solicita los permisos al usuario, antes de renderizar la cámara

import { render, screen, act, waitFor } from "@testing-library/react-native";
import CameraView from "../components/camerascreen/CameraView";
import { Camera, CameraType } from "expo-camera";
import { View } from "react-native";

describe("<Camera />", () => {
  it("Camera se renderiza correctamente", () => {
    jest.mock("expo-camera", () => ({
      ...jest.requireActual("expo-camera"),
      useCameraPermissions: () => ({
        status: "granted",
        request: jest.fn(),
      }),
      useMicrophonePermissions: () => ({
        status: "granted",
        request: jest.fn(),
      }),
    }));
    render(
      <CameraView cameraType={CameraType.front}>
        <View testID="camera"></View>
      </CameraView>
    );

    void (async () => {
      await waitFor(() => {
        const camera = screen.getByTestId("camera");

        expect(camera).toBeDefined();
        expect(camera.prop.cameraType).toBe("front");
      });
    })();
  });

  //   it('calls onCameraReady with the camera instance', () => {
  //     const onCameraReady = jest.fn();
  //     render(<CameraView cameraType={CameraType.back} onCameraReady={onCameraReady} />);
  //     expect(onCameraReady).toHaveBeenCalledTimes(1);
  //   });
});
