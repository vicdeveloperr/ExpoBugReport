import { render, fireEvent, screen } from "@testing-library/react-native";
import BtnPlay from "../../../components/videoTutorial/BtnPlay";

const BtnPlayTestId = "BtnPlay";
let mockOnPress: jest.Mock<any, any, any>;

describe("<BtnPlay />", () => {
  beforeEach(() => {
    mockOnPress = jest.fn();
    render(<BtnPlay onPressAction={mockOnPress} />);
  });

  it("Renderiza botón correctamente", () => {
    const button = screen.getByTestId(BtnPlayTestId);
    expect(button).toBeTruthy();
  });

  it("Dispara función asignada a través de las props", () => {
    const button = screen.getByTestId(BtnPlayTestId);
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
