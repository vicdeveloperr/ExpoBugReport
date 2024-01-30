import "@testing-library/react-native/extend-expect";
import { View } from "react-native";
import VideoTutorialScreen from "../../screens/VideoTutorialScreen";
import { render, screen } from "@testing-library/react-native";

describe("<VideoTutorialScreen />", () => {
  beforeEach(() => {
    const children = <View testID="children"></View>;
    render(<VideoTutorialScreen>{children}</VideoTutorialScreen>);
  });

  it("Renderiza correctamente sus childrens", () => {
    const children = screen.getByTestId("children");
    expect(children).toBeTruthy();
  });
});
