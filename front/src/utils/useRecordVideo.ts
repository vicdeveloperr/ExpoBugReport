import type { Camera } from "expo-camera";
import { useRecordedStore } from "../stateManagement";

type recordVideo = (camera: Camera) => Promise<void | string>;

const useRecordVideo: recordVideo = async (camera) => {
  const { setRecorded } = useRecordedStore((state) => state);

  if (camera != null) {
    const recorded = await camera
      .recordAsync({
        maxDuration: 10,
      })
      .then(({ uri }: { uri: string }) => {
        console.log("Video grabado:", uri);
        return uri;
      })
      .catch((error) => {
        const errorMesage = `Error al iniciar la grabación: ${error}`;
        console.log(errorMesage);
        return errorMesage;
      });

    setRecorded(recorded);
    return recorded;
  }
  return "Error al iniciar la cámara";
};

export default useRecordVideo;
