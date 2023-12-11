import { apiUrl } from "./apiUrl";
import { useVideoProcessingStore } from "../stateManagement/stores";

type ApiResponse = {
  status: 200;
  filename: string;
};

export async function uploadVideo(uri: string) {
  const videoData = new FormData();
  videoData.append("file", {
    uri,
    name: "video.mp4",
    type: "video/mp4",
  } as any); // FormData.append espera un Blob como segundo argumento. Pero, igualmente pasarle un objeto con la estructura {uri, name y type} funciona para almacenar datos de vídeo. Por ello, utilizamos el tipo any.

  try {
    const response = await fetch(`${apiUrl}/uploadfile`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: videoData,
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error en la solicitud a la API:", error);
    throw error;
  }
}

export default uploadVideo;
