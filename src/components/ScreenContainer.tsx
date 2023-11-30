import { useEffect, useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { View, StyleSheet } from "react-native";

interface ScreenContainerProps {
  children: React.ReactNode;
}
const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);

  useEffect(() => {
    const height = getStatusBarHeight();
    setStatusBarHeight(height);
  }, []);

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
