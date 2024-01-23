import type { Camera } from "expo-camera";

export default async function recordVideo(
  camRef: React.RefObject<Camera>
): Promise<string> {
  const camera = camRef.current;
  if (camera != null) {
    return await camera
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
  }
  return "Error al iniciar la cámara";
}
