import { movements, tModelConsultor } from "../domain/types";

interface Result {
  message: string;
}
type tUseAnalyzeVideo = (
  modelConsultor: tModelConsultor,
  uri: string,
  movementToImprove: movements
) => Promise<Result>;

export const useAnalyzeVideo: tUseAnalyzeVideo = async (
  modelConsultor,
  uri,
  movementToImprove
) => {
  const result = await modelConsultor(uri, movementToImprove);
  return {
    message: result.message.content,
  };
};
