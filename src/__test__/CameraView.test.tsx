import { render, screen } from "@testing-library/react-native";
import CameraView from "../components/camerascreen/CameraView";
import { CameraType } from "expo-camera";
import { View } from "react-native";

describe("<CameraView />", () => {
  it("CameraView se renderiza correctamente", async () => {
  render(
      <CameraView
        isCameraPermissionGranted={true}
        isMicrophonePermissionGranted={true}
        cameraType={CameraType.front}
      >
        <View testID="camera"></View>
      </CameraView>
    );

    const camera = screen.getByTestId("camera");
    expect(camera).toBeDefined();
  });
});
