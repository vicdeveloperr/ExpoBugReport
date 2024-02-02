import { View } from "react-native";
import {
  render,
  waitFor,
  fireEvent,
  screen,
} from "@testing-library/react-native";

interface videoType {
  playAsync: jest.Mock<any, any, any>;
}

let video: videoType;
let children: React.ReactElement;
let onPress: () => void;

describe("<VideoTutorialController />", () => {
  beforeEach(() => {
    video = { playAsync: jest.fn() };
    children = <View testID="children"></View>;
    onPress = jest.fn();

    render(
      <VideoTutorialController
        onPressAction={onPress}
        video={video}
      >
        {children}
      </VideoTutorialController>
    );
  });

  it("Reproduce el vídeo automáticamente al renderizarse", async () => {
    await waitFor(() => {
      expect(video.playAsync).toHaveBeenCalledTimes(1);
    });
  });

  it("Renderiza correctamente su children", () => {
    const videoTutorialControllerChildren = screen.getByTestId("children");
    expect(videoTutorialControllerChildren).toBeDefined();
  });

  it("Invoca a función pasada por prop, al presionarlo", () => {
    const videoTutorialControllerChildren = screen.getByTestId("children");

    fireEvent(videoTutorialControllerChildren, "press");

    expect(onPress).toHaveBeenCalled();
  });
});
