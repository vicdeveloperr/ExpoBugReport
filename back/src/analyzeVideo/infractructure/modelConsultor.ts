import ollama from "ollama";
import { tModelConsultor } from "../domain/types";
import { framesExtractor } from "./framesExtractor";
import path from "path";
import { saveVideo } from "./saveVideo";

export const modelConsultor: tModelConsultor = async (
  video,
  movementToImprove
) => {
  const videoPath = "../../../data";
  await saveVideo(video);
  const frames = await framesExtractor(videoPath);
  const imagesToProcess = frames ? frames : undefined;

  const response = await ollama.chat({
    model: "choss",
    messages: [
      {
        role: "user",
        content: `I want to improve the next movement: ${movementToImprove}`,
        images: imagesToProcess,
      },
    ],
  });

  return response;
};
