import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

const App: React.FC = () => {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <StackNavigator />
    </PaperProvider>
  );
};

export default App;
