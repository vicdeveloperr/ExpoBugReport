import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";
import { Text } from "react-native-paper";

const Title = () => <Text>Análisis generado...</Text>;

export const AnalysisScreen = () => {
  return (
    <>
      <Title />
      <UserMovementVideo />
      <RecomendedQuestions questions={[""]} />
      <Nav />
    </>
  );
};
