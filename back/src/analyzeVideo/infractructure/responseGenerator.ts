import type { tResponseGenerator } from "../domain/types";
import { modelConsultor } from "./modelConsultor";
import { speechGenerator } from "./speechGenerator";

const responseGenerator: tResponseGenerator = async (
  video,
  movementToImprove
) => {
  const modelResponse = await modelConsultor(video, movementToImprove);
  if (modelResponse.done) {
    const audio = await speechGenerator(modelResponse.message.content);
    return {
      audio,
    };
  }
};
