import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react-native";
import BtnPlay from "../../../components/videoTutorial/BtnPlay";
import { useBtnPlayModalStore } from "../../../stateManagement";

jest.mock("../../../stateManagement/", () => ({
  useBtnPlayModalStore: jest.fn().mockReturnValue({
    isBtnPlayVisible: true,
  }),
}));

const BtnPlayTestId = "BtnPlay";
let mockOnPress: jest.Mock<any, any, any>;

describe("<BtnPlay />", () => {
  beforeEach(() => {
    mockOnPress = jest.fn();
    render(<BtnPlay onPressAction={mockOnPress} />);
  });

  it("Renderiza botón correctamente", async () => {
    await waitFor(() => {
      const button = screen.getByTestId(BtnPlayTestId);
      expect(button).toBeTruthy();
    });
  });

  it("No renderiza botón si isBtnPlayVisible no es verdadero", async () => {
    await waitFor(() => {
      const button = screen.queryByTestId(BtnPlayTestId);
      expect(button).toBeFalsy();
    });
  });

  it("Dispara función asignada a través de las props", async () => {
    await waitFor(() => {
      const button = screen.getByTestId(BtnPlayTestId);
      fireEvent.press(button);
      expect(mockOnPress).toHaveBeenCalled();
    });
  });
});
