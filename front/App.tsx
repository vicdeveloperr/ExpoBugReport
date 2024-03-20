import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { SpeechAnimation } from "./src/components/analysis/SpeechAnimation";

const App: React.FC = () => {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <SpeechAnimation />
    </PaperProvider>
  );
};

export default App;
