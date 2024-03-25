import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";

export const AnalysisScreen = () => {
  return (
    <>
      <UserMovementVideo />
      <RecomendedQuestions questions={[""]} />
      <Nav />
    </>
  );
};
