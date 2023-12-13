import { useEffect, useState } from "react";
import ProgressBar from "react-native-progress/Bar";

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
};

export default Loader;
