import ollama from "ollama";
import { tModelConsultor } from "../domain/types";
import { framesExtractor } from "./framesExtractor";
import path from "path";
import { saveVideo } from "./saveVideo";

export const modelConsultor: tModelConsultor = async (
  video,
  movementToImprove
) => {
  const videoPath = path.resolve("../../../data", video.name);
  await saveVideo(video);
  const frames = await framesExtractor(videoPath);
  const imagesToProcess = frames ? frames : undefined;

  const response = await ollama.chat({
    model: "choss",
    messages: [
      {
        role: "user",
        content: `I want to improve the next movement: ${movementToImprove}.
        
        Let's go step by step, and analyze each of the images in the video.`,
        images: imagesToProcess,
      },
    ],
  });

  return response;
};
