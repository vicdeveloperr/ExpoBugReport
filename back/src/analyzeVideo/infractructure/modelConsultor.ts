import ollama from "ollama";
import { tModelConsultor } from "../domain/types";
import { framesExtractor } from "./framesExtractor";

export const modelConsultor: tModelConsultor = async (
  video,
  movementToImprove
) => {
  const frames = await framesExtractor(videoUri);
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
