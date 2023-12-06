import { apiUrl } from "./apiUrl";

type ApiResponse = {
  status: 200;
  filename: string;
};

export async function uploadVideo(video: FormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${apiUrl}/uploadfile/?name=vicdeveloper`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: video, 
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error en la solicitud a la API:", error);
    throw error;
  }
}

export default uploadVideo;
