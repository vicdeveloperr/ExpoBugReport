import "@testing-library/react-native/extend-expect";
import { View } from "react-native";
import { render, screen } from "@testing-library/react-native";
import React from "react";
import VideoTutorial from "../../../components/videoTutorial/VideoTutorial";

function renderVideoTutorialWith(children: React.ReactElement): void {
  render(<VideoTutorial>{children}</VideoTutorial>);
}

describe("<VideoTutorial />", () => {
  it("Renderiza correctamente sus childrens", () => {
    const children = <View testID="children"></View>;
    renderVideoTutorialWith(children);

    const childrenInTheVirtualDOM = screen.getByTestId("children");
    expect(childrenInTheVirtualDOM).toBeTruthy();
  });

  it("Renderiza correctamente ReactFragment como children", () => {
    const children = (
      <>
        <View testID="children"></View>
      </>
    );
    renderVideoTutorialWith(children);

    const childrenInTheVirtualDOM = screen.getByTestId("children");
    expect(childrenInTheVirtualDOM).toBeTruthy();
  });
});
