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
    padding: 4,
    backgroundColor: "rgba(199, 79, 31, 0.5)",
  },
  questionText: {
    fontWeight: "bold",
  },
});
