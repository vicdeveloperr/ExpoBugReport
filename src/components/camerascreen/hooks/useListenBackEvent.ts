import { useNavigation } from "@react-navigation/native";
import type { navigationEvent } from "../../../types/navigationEvent";
import type { CameraScreenNavigator } from "../../../screens/CameraScreen";

type ListenNavigateBackEvent = (
  onNavigateBack: (e: navigationEvent) => void
) => void;

export const useListenNavigateBackEvent: ListenNavigateBackEvent = (
  onNavigateBack
) => {
  const navigation = useNavigation<CameraScreenNavigator>();
  navigation.addListener("beforeRemove", (event) => {
    onNavigateBack(event);
  });
};
