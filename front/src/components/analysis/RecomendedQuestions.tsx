import { StyleSheet, Text, View } from "react-native";
import { whiteColor } from "../../utils/colors";

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
      <View style={styles.questionsContainer}>
        <Text>{question}</Text>
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
  questionsContainer: {
    borderWidth: 2,
    borderColor: whiteColor,
    borderRadius: 50,
    padding: 3,
  },
});
