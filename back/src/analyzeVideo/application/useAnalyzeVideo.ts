import { movements, tModelConsultor } from "../domain/types";

interface Result {
  message: string;
}
type tUseAnalyzeVideo = (
  modelConsultor: tModelConsultor,
  video: File,
  movementToImprove: movements
) => Promise<Result>;

export const useAnalyzeVideo: tUseAnalyzeVideo = async (
  modelConsultor,
  video,
  movementToImprove
) => {
  const result = await modelConsultor(video, movementToImprove);
  return {
    message: result.message.content,
  };
};
