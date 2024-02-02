import { VideoTutorial } from "../../../components/videoTutorial/VideoTutorial";
import renderer from "react-test-renderer";

it("Renderiza el componente VideoTutorialPlayer con la estructura esperada", () => {
  const tree = renderer.create(<VideoTutorial sourceUri="" />).toJSON();

  expect(tree).toMatchSnapshot();
});
