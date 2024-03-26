import { StyleSheet, Text, View } from "react-native";
import { primaryColor, whiteColor } from "../../utils/colors";
import { paragraph } from "../../utils/genericStyles";

type RecomendedQuestionsType = (
  props: RecomendedQuestionsProps
) => React.ReactNode;

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <View
      style={styles.container}
      testID="RecomendedQuestions"
    >
      {children}
    </View>
  );
};

interface RecomendedQuestionsProps {
  questions: string[];
}
export const RecomendedQuestions: RecomendedQuestionsType = ({ questions }) => {
  const elements = questions.map((question) => {
    return (
      <View style={styles.questionContainer}>
        <Text style={[paragraph, styles.questionText]}>{question}</Text>
      </View>
    );
  });

  return <Container>{elements}</Container>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  questionContainer: {
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 250, 250, 0.4)",
  },
  questionText: {
    fontWeight: "bold",
  },
});
