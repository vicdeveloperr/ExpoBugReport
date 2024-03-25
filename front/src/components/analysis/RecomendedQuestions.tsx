import { Text, View } from "react-native";

type RecomendedQuestionsType = (questions: string[]) => React.ReactNode;

const RecomendedQuestions: RecomendedQuestionsType = (questions) => {
  const elements = questions.map((question) => {
    return (
      <View>
        <Text>{question}</Text>
      </View>
    );
  });

  return elements;
};
