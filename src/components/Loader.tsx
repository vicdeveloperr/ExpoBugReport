import { useState } from "react";
import ProgressBar from "react-native-progress/Bar";

interface LoaderProps {
  complete: boolean;
}

const Loader: React.FC<LoaderProps> = ({ complete }) => {
  const [progress, setProgress] = useState(0);
};

export default Loader;
