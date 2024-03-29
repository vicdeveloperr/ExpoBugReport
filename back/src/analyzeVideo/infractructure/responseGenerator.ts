import type { tResponseGenerator } from "../domain/types";
import { modelConsultor } from "./modelConsultor";
import { speechGenerator } from "./speechGenerator";

export const responseGenerator: tResponseGenerator = async (
  video,
  movementToImprove
) => {
  const modelResponse = await modelConsultor(video, movementToImprove);
  let audio: string | void;

  audio = await speechGenerator(modelResponse.message.content);
  if (typeof audio === "string") {
    return {
      audioUrl: audio,
    };
  }
};
