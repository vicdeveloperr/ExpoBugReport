import { Elysia, t } from "elysia";
import { Video } from "./domain/video";
import { extractVideoFrames } from "./application/extractVideoFrames";

type tBody = { video: Video };
export const extractFrames = new Elysia().post(
  "/extractVideoFrames",
  (request) => {
    const result = extractVideoFrames(body.video);

    return (
      result,
      {
        body: t.Object({
          video: t.File({ type: "video" }),
        }),
      }
    );
  }
);
