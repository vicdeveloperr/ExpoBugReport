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
        // stopRecording();
        console.log("Video grabado:", uri);
        return uri;
      })
      .catch((error) => {
        const errorMesage = `Error al iniciar la grabación: ${error}`;
        console.error(errorMesage);
      });
  }
  return "Error al iniciar la cámara";
}
