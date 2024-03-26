import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";
import { StyleSheet, Text } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import { questions } from "../utils/recomendedQuestions";

const Title = () => <Text>Análisis generado...</Text>;

export const AnalysisScreen = () => {
  return (
    <>
      <UserMovementVideo />
      <ScreenContainer styles={styles.container}>
        <Title />
        <RecomendedQuestions questions={questions} />
        <Nav />
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
