import { StyleSheet, Text, View } from "react-native";
import { primaryColor, whiteColor } from "../../utils/colors";
import { paragraph } from "../../utils/genericStyles";
import { useStatusBarHeightStore } from "../../stateManagement";
import { Button } from "../Button";

type RecomendedQuestionsType = (
  props: RecomendedQuestionsProps
) => React.ReactNode;

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <View
      style={[styles.container]}
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
      <Button styles={styles.questionContainer}>
        <Text style={[paragraph, styles.questionText]}>{question}</Text>
      </Button>
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
    paddingVertical: 3,
    paddingHorizontal: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    marginLeft: 10,
  },
  questionText: {
    fontWeight: "bold",
  },
});
