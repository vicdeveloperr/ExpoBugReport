import "@testing-library/react-native/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("<AlertDialog />", () => {
  it("AlertDialog se renderiza correctamente", () => {
    const AlertDialogComponent = screen.getByTestId("AlertDialog");
    const AlertDialogContinueRecordButton = screen.getByText("Continuar");
    const AlertDialogFinishRecordButton = screen.getByText("Finalizar");

    expect(AlertDialogComponent).toBeDefined();
    expect(AlertDialogComponent).toHaveTextContent("Grabación en curso");
    expect(AlertDialogComponent).toHaveTextContent(
      "Finalice la grabación, antes de abandonar."
    );
    expect(AlertDialogFinishRecordButton).toBeDefined();
    expect(AlertDialogContinueRecordButton).toBeDefined();
  });

  it("cuando se clicka en el botón de continuar grabación del AlertDialogComponent, se oculta el cuadro de diálogo", () => {
    const AlertDialogComponent = screen.getByTestId("AlertDialog");
    const AlertDialogContinueRecordButton = screen.getByText("Continuar");

    fireEvent(AlertDialogContinueRecordButton, "press");
    expect(AlertDialogComponent).not.toBeDefined();
  });
  it("cuando se clicka en el botón de finalizar grabación del AlertDialogComponent, se oculta el cuadro de diálogo", () => {
    const AlertDialogComponent = screen.getByTestId("AlertDialog");
    const AlertDialogFinishRecordButton = screen.getByText("Finalizar");

    fireEvent(AlertDialogFinishRecordButton, "press");
    expect(AlertDialogComponent).not.toBeDefined();
  });
});
