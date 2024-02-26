import { tModelConsultor } from "../domain/types";

interface Result {
  message: string;
}
type tUseAnalyzeVideo = (
  modelConsultor: tModelConsultor,
  uri: string
) => Promise<Result>;

export const useAnalyzeVideo: tUseAnalyzeVideo = async (
  modelConsultor,
  uri
) => {
  const result = await modelConsultor(uri);
  return {
    message: result,
  };
};
