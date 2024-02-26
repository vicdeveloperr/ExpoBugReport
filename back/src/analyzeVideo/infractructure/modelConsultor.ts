import ollama from "ollama";
import { tModelConsultor } from "../domain/types";
import { framesExtractor } from "./framesExtractor";

export const modelConsultor: tModelConsultor = async (videoUri) => {
  const frames = await framesExtractor(videoUri);
  const imagesToProcess = frames ? frames : undefined;

  const response = await ollama.chat({
    model: "choss",
    messages: [
      {
        role: "user",
        content: "Describe this image:",
        images: imagesToProcess,
      },
    ],
  });

  return response;
};
