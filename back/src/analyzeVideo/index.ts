import { Elysia, t } from "elysia";
import { Video } from "./domain/types";
import { extractVideoFrames } from "./application/useAnalyzeVideo";
import { framesExtractor } from "./infractructure/framesExtractor";

type tBody = { video: Video };
export const extractFrames = new Elysia().post(
  "/extractVideoFrames",
  ({ body }) => {
    // const result = extractVideoFrames(framesExtractor(body.video));

    return body.video;
  }
);
