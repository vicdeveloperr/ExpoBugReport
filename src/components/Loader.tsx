import { useEffect, useState } from "react";
import ProgressBar from "react-native-progress/Bar";
import { StyleSheet, Text } from "react-native";
import ScreenContainer from "./ScreenContainer";
import ScreenDark from "./ScreenDark";
import { useInterval } from "usehooks-ts";
import { primaryColor, darkColor } from "../utils/colors";
import { paragraph } from "../utils/genericStyles";

interface LoaderProps {
  complete: boolean;
}

const Loader: React.FC<LoaderProps> = ({ complete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(1);
  }, [complete]);

  useInterval(() => {
    if (progress < 0.85) {
      setProgress((state) => state + 0.1);
    }
  }, 300);

  return (
    <ScreenDark stylesView={styles.ScreenDark}>
      <ScreenContainer styles={styles.ScreenContainer}>
        <Text style={[styles.text, paragraph]}>Cargando...</Text>
        <ProgressBar
          progress={progress}
          width={null}
          height={20}
          color={primaryColor}
        />
      </ScreenContainer>
    </ScreenDark>
  );
};

const styles = StyleSheet.create({
  ScreenDark: {
    alignItems: "stretch",
    backgroundColor: darkColor,
  },
  ScreenContainer: {
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 9,
  },
});

export default Loader;
