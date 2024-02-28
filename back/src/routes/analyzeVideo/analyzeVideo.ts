import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import { modelConsultor } from "../../analyzeVideo/infractructure/modelConsultor";
import {
  bodyValidator,
  paramsValidator,
} from "../../middlewares/analyzeVideo/validators";

const analyzeVideo = new Hono();

analyzeVideo.post("/", paramsValidator, bodyValidator, async (c) => {
  const { movement } = await c.req.valid("param");
  const form = await c.req.valid("form");

  if (!(form instanceof Response)) {
    const analysis = await useAnalyzeVideo(
      modelConsultor,
      form.video,
      movement
    );
    return c.json(analysis);
  }
});

export default analyzeVideo;
