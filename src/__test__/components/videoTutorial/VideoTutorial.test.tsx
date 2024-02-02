import {
  VideoTutorial,
  videoRef,
} from "../../../components/videoTutorial/VideoTutorial";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

describe("<VideoTutorial />", () => {
  it("Renderiza el componente VideoTutorialPlayer con la estructura esperada", () => {
    const tree = renderer.create(<VideoTutorial sourceUri="" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Define valor de videoRef correctamente", () => {
    render(<VideoTutorial sourceUri="" />);

    expect(videoRef).toBeDefined();
  });
});
