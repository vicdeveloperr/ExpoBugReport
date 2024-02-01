import renderer from "react-test-renderer";
import Buttons from "../../../components/videoTutorial/Buttons";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn(), addListener: jest.fn() }),
}));

describe("<Buttons />", () => {
  it("Renderiza todo correctamente", () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
