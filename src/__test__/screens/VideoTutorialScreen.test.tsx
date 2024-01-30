import "@testing-library/react-native/extend-expect";
import { View } from "react-native";
import VideoTutorialScreen from "../../screens/VideoTutorialScreen";
import { render, screen } from "@testing-library/react-native";
import React from "react";

function renderVideoTutorialScreenWith(children: React.ReactElement): void {
  render(<VideoTutorialScreen>{children}</VideoTutorialScreen>);
}

describe("<VideoTutorialScreen />", () => {
  it("Renderiza correctamente sus childrens", () => {
    const children = <View testID="children"></View>;
    renderVideoTutorialScreenWith(children);

    const childrenInTheVirtualDOM = screen.getByTestId("children");
    expect(childrenInTheVirtualDOM).toBeTruthy();
  });

  it("Renderiza correctamente ReactFragment como children", () => {
    const children = (
      <>
        <View testID="children"></View>
      </>
    );
    renderVideoTutorialScreenWith(children);

    const childrenInTheVirtualDOM = screen.getByTestId("children");
    expect(childrenInTheVirtualDOM).toBeTruthy();
  });
});
