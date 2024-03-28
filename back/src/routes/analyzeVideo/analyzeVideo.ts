import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import {
  bodyValidator,
  paramsValidator,
} from "../../middlewares/analyzeVideo/validators";
import { serveStatic } from "hono/bun";
import { responseGenerator } from "../../analyzeVideo/infractructure/responseGenerator";
import { cleaner } from "../../analyzeVideo/infractructure/cleaner";

const analyzeVideo = new Hono();

analyzeVideo.post("/", async (_, next) => {
  next();
  await cleaner();
  console.log("Carpeta 'data' borrada");
});

analyzeVideo.post("/", paramsValidator, bodyValidator, async (c) => {
  const { movement } = await c.req.valid("param");
  const form = await c.req.valid("form");

  if (!(form instanceof Response)) {
    const result = await useAnalyzeVideo(
      responseGenerator,
      form.video,
      movement
    );

    if (typeof result != "string") {
      const file = Bun.file(result.audioUrl);
      const res = new Response(file);
      return res;
    }

    return c.text(result);
  }
});

export default analyzeVideo;
