import {
  movements,
  tModelConsultor,
  AnalyzeVideoResult,
} from "../domain/types";

type tUseAnalyzeVideo = (
  modelConsultor: tModelConsultor,
  video: File,
  movementToImprove: movements
) => Promise<AnalyzeVideoResult>;

export const useAnalyzeVideo: tUseAnalyzeVideo = async (
  modelConsultor,
  video,
  movementToImprove
) => {
  const result = await modelConsultor(video, movementToImprove);
  return result;
};
