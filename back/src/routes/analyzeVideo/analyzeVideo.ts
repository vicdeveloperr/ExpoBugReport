import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import { modelConsultor } from "../../analyzeVideo/infractructure/modelConsultor";
import { paramsValidator } from "../../middlewares/analyzeVideo/validator";

const analyzeVideo = new Hono();

analyzeVideo.post("/", paramsValidator, async (c) => {
  const { movement } = await c.req.valid("param");
  const { video } = await c.req.parseBody();
  const analysis = await useAnalyzeVideo(modelConsultor, "", movement);

  return c.json(analysis);
});

export default analyzeVideo;
