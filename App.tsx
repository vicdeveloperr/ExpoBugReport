import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { Text } from "react-native";

const App: React.FC = () => {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Text>Hola mundo!</Text>
    </PaperProvider>
  );
};

export default App;
