import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { useEffect, useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, View } from "react-native";

export default function App() {
  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);

  useEffect(() => {
    const height = getStatusBarHeight();
    setStatusBarHeight(height);
  }, []);

  return (
    <View style={[styles.container, { marginTop: statusBarHeight }]}>
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
