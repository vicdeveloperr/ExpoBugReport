import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import { modelConsultor } from "../../analyzeVideo/infractructure/modelConsultor";
import { paramsValidator } from "../../middlewares/analyzeVideo/validators";
import { writeFile } from "fs/promises";

const analyzeVideo = new Hono();

analyzeVideo.post("/", paramsValidator, async (c) => {
  const { movement } = await c.req.valid("param");
  const { video } = await c.req.parseBody();
  const analysis = await useAnalyzeVideo(modelConsultor, "", movement);

  if (video instanceof File) {
    const path = `../../../assets/${video.name}`;
    const buffer = await video.arrayBuffer();
    await writeFile(path, Buffer.from(buffer));
  }
  return c.json(analysis);
});

export default analyzeVideo;
