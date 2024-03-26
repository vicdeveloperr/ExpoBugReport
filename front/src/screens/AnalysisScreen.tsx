import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";
import { StyleSheet, Text, View } from "react-native";
import { questions } from "../utils/recomendedQuestions";
import { LinearGradient } from "expo-linear-gradient";

const Title = () => <Text>Análisis generado...</Text>;

export const AnalysisScreen = () => {
  return (
    <>
      <UserMovementVideo />
      <View style={styles.container}>
        <LinearGradient
          colors={["#000", "transparent"]}
          style={styles.container}
          start={[0, 1]}
          end={[0, 0.8]}
        >
          <Title />
          <RecomendedQuestions questions={questions} />
        </LinearGradient>
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
