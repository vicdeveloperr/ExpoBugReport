import { tFramesExtractor } from "../domain/types";
type typeExtractVideoFrames = (
  framesExtractor: tFramesExtractor,
  uri: string
) => Promise<string[] | void>;

export const extractVideoFrames: typeExtractVideoFrames = async (
  framesExtractor,
  uri
) => {
  const result = await framesExtractor(uri);
  return result;
};
