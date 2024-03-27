import { movementsAvailable } from "../types/movementsAvailable";
import { apiUrl } from "./apiUrl";
import { v4 as uuidv4 } from "uuid";

type ApiResponse = {
  status: 200;
  filename: string;
};

export async function getVideoAnalysis(
  uri: string,
  movementWantImprove: movementsAvailable
) {
  const videoData = new FormData();
  const id = uuidv4();
  videoData.append("video", {
    uri,
    name: `${id}.mp4`,
    type: "video/mp4",
  } as any); // FormData.append espera un Blob como segundo argumento. Pero, igualmente pasarle un objeto con la estructura {uri, name y type} funciona para almacenar datos de vídeo. Por ello, utilizamos el tipo any.

  try {
    const response = await fetch(
      `${apiUrl}/analyzeVideo/${movementWantImprove}`,
      {
        method: "POST",
        body: videoData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }

    const data = await response.toString();

    console.log(data);
  } catch (error) {
    console.error("Error en la solicitud a la API:", error);
    throw error;
  }
}

export default getVideoAnalysis;
