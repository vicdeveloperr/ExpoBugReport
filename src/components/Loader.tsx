import { useEffect, useState } from "react";
import ProgressBar from "react-native-progress/Bar";
import { View, Text } from "react-native";
import ScreenContainer from "./ScreenContainer";
import ScreenDark from "./ScreenDark";

interface LoaderProps {
  complete: boolean;
}

const Loader: React.FC<LoaderProps> = ({ complete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress + 0.05) % 1);
    }, 300);

    complete && setProgress(1);

    return () => clearInterval(interval);
  }, []);

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
