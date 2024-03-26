import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import { questions } from "../utils/recomendedQuestions";

const Title = () => <Text>Análisis generado...</Text>;

export const AnalysisScreen = () => {
  return (
    <>
      <UserMovementVideo />
      <View style={styles.container}>
        <Title />
        <RecomendedQuestions questions={questions} />
        <Nav />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
});
