import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";
import { Text } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import {que}

const Title = () => <Text>Análisis generado...</Text>;

export const AnalysisScreen = () => {
  return (
    <>
      <UserMovementVideo />
      <ScreenContainer>
        <Title />
        <RecomendedQuestions questions={questions} />
        <Nav />
      </ScreenContainer>
    </>
  );
};

