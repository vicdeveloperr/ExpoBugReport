import "@testing-library/react-native/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react-native";
import AlertDialog from "../components/AlertDialog";
import { PaperProvider } from "react-native-paper";
import { Text, Button } from "react-native";

describe("<AlertDialog />", () => {
  it("AlertDialog se renderiza correctamente", () => {
    const title = "Grabación en curso";
    const content = "Finalice la grabación, antes de abandonar";
    const alertDialogContent = <Text>{content}</Text>;
    const alertDialogActions = (
      <>
        <Button title="Continuar" />
        <Button title="Finalizar" />
      </>
    );
    render(
      <PaperProvider>
        <AlertDialog
          title={title}
          visible={true}
          DialogContent={alertDialogContent}
          DialogActions={alertDialogActions}
        />
      </PaperProvider>
    );

    const AlertDialogContent = screen.getByText(title);
    const AlertDialogTitle = screen.getByText(content);
    const AlertDialogContinueRecordButton = screen.getByText("Continuar");
    const AlertDialogFinishRecordButton = screen.getByText("Finalizar");

    expect(AlertDialogContent).toBeDefined();
    expect(AlertDialogTitle).toBeDefined();
    expect(AlertDialogFinishRecordButton).toBeDefined();
    expect(AlertDialogContinueRecordButton).toBeDefined();
  });

//   it("cuando se clicka en el botón de continuar grabación del AlertDialogComponent, se oculta el cuadro de diálogo", () => {
//     const AlertDialogComponent = screen.getByTestId("AlertDialog");
//     const AlertDialogContinueRecordButton = screen.getByText("Continuar");

//     fireEvent(AlertDialogContinueRecordButton, "press");
//     expect(AlertDialogComponent).not.toBeDefined();
//   });
//   it("cuando se clicka en el botón de finalizar grabación del AlertDialogComponent, se oculta el cuadro de diálogo", () => {
//     const AlertDialogComponent = screen.getByTestId("AlertDialog");
//     const AlertDialogFinishRecordButton = screen.getByText("Finalizar");

//     fireEvent(AlertDialogFinishRecordButton, "press");
//     expect(AlertDialogComponent).not.toBeDefined();
//   });
});
