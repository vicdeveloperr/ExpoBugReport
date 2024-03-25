import { Text, View } from "react-native";

type RecomendedQuestionsType = (questions: string[]) => React.ReactNode;

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <View testID="RecomendedQuestions">{children}</View>;
};

export const RecomendedQuestions: RecomendedQuestionsType = (questions) => {
  const elements = questions.map((question) => {
    return (
      <View>
        <Text>{question}</Text>
      </View>
    );
  });

  return <Container>{elements}</Container>;
};
