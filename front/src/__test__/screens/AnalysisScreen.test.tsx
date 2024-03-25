import { render } from "@testing-library/react-native";
import { AnalysisScreen } from "../../screens/AnalysisScreen";

const renderComponent = () => {
  const selectors = render(<AnalysisScreen />);

  return selectors;
};

describe("<AnalysisScreen />", () => {
  it("Muestra mensaje de 'Análisis generado...'", () => {
    const { getByText } = renderComponent();

    expect(getByText("Análisis generado...")).toBeTruthy();
  });

  it("Muestra preguntas recomendadas", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("RecomendedQuestions")).toBeTruthy();
  });

  it("Muestra barra de navegación", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("nav")).toBeTruthy();
  });

  it("Muestra vídeo del movimiento realizado por el usuario", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("UserMovementVideo")).toBeTruthy();
  });
});
