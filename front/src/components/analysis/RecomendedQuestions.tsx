import { Text, View } from "react-native";

type RecomendedQuestionsType = (questions: string[]) => React.ReactNode;

const Container = (children: React.ReactNode) => {
  return <View testID="RecomendedQuestions">{children}</View>;
};

const RecomendedQuestions: RecomendedQuestionsType = (questions) => {
  const elements = questions.map((question) => {
    return (
      <View>
        <Text>{question}</Text>
      </View>
    );
  });

  return <Container>{elements}</Container>;
};
