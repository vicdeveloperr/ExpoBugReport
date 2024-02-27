import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import { modelConsultor } from "../../analyzeVideo/infractructure/modelConsultor";
import { validator } from "../../middlewares/analyzeVideo/validator";

const analyzeVideo = new Hono();

analyzeVideo.post("/", validator, async (c) => {
  const body = await c.req.valid("json");
  const analysis = await useAnalyzeVideo(modelConsultor, "", body.movement);

  return c.json(analysis);
});

export default analyzeVideo;
