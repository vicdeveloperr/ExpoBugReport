import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <StackNavigator />
    </>
  );
}
