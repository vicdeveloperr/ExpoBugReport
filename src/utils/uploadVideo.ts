import { apiUrl } from "./apiUrl";

type ApiResponse = {
  status: 200;
  filename: string;
};

export async function uploadVideo(video: FormData) {
  try {
    const response = await fetch(`${apiUrl}/uploadfile`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: video,
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
