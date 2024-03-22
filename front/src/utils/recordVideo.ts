import type { Camera } from "expo-camera";

export default async function useRecordVideo(
  camRef: React.RefObject<Camera>
): Promise<string> {
  const camera = camRef.current;

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

    return recorded;
  }
  return "Error al iniciar la cámara";
}
