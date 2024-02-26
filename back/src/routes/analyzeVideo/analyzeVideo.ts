import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import { modelConsultor } from "../../analyzeVideo/infractructure/modelConsultor";

const analyzeVideo = new Hono();

analyzeVideo.post("/", async (c) => {
  const request = await c.req.parseBody();
  const analysis = await useAnalyzeVideo(modelConsultor, "", request.movement);

  return c.json(analysis);
});

export default analyzeVideo;
