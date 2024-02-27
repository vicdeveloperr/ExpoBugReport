import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import { modelConsultor } from "../../analyzeVideo/infractructure/modelConsultor";
import { middlewareValidator } from "../../middlewares/analyzeVideo/middlewareValidator";

const analyzeVideo = new Hono();

analyzeVideo.post("/", middlewareValidator, async (c) => {
  const body = await c.req.valid("json");
  const analysis = await useAnalyzeVideo(modelConsultor, "", body.movement);

  return c.json(analysis);
});

export default analyzeVideo;
