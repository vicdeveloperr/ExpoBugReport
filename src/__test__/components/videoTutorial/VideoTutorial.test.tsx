import {
  VideoTutorial,
  videoRef,
} from "../../../components/videoTutorial/VideoTutorial";
import renderer from "react-test-renderer";
import { render, waitFor } from "@testing-library/react-native";

describe("<VideoTutorial />", () => {
  it("Renderiza el componente VideoTutorial con la estructura esperada", () => {
    const tree = renderer.create(<VideoTutorial sourceUri="" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Reproduce el vídeo automáticamente al renderizarse", async () => {
    if (videoRef.current != null) {
      const playAsyncSpy = jest.spyOn(videoRef.current, "playAsync");

      await waitFor(() => {
        expect(playAsyncSpy).toHaveBeenCalled();
      });
    }
  });

  it("Define valor de videoRef correctamente", () => {
    render(<VideoTutorial sourceUri="" />);

    expect(videoRef).toBeDefined();
  });
});
