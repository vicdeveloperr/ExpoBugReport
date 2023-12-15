import { useEffect, useState } from "react";
import ProgressBar from "react-native-progress/Bar";
import { View, Text } from "react-native";
import ScreenContainer from "./ScreenContainer";
import ScreenDark from "./ScreenDark";
import { useInterval } from "usehooks-ts";

interface LoaderProps {
  complete: boolean;
}

const Loader: React.FC<LoaderProps> = ({ complete }) => {
  const [progress, setProgress] = useState(0);

  useInterval(() => {
    setProgress(state => (state + 0.05) % 1);
  }, 300);

  return (
    <ScreenDark>
      <ScreenContainer>
        <Text>Cargando...</Text>
        <ProgressBar
          progress={progress}
          width={200}
          height={20}
        />
      </ScreenContainer>
    </ScreenDark>
  );
};

export default Loader;
