import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import { modelConsultor } from "../../analyzeVideo/infractructure/modelConsultor";
import {
  bodyValidator,
  paramsValidator,
} from "../../middlewares/analyzeVideo/validators";
import { writeFile } from "fs/promises";

const analyzeVideo = new Hono();

analyzeVideo.post("/", paramsValidator, bodyValidator, async (c) => {
  const { movement } = await c.req.valid("param");
  const form = await c.req.valid("form");
  const analysis = await useAnalyzeVideo(modelConsultor, "", movement);

  if (!(form instanceof Response)) {
    const path = `../../../assets/${form.video.name}`;
    const buffer = await form.video.arrayBuffer();
    await writeFile(path, Buffer.from(buffer));
  }
  return c.json(analysis);
});

export default analyzeVideo;
