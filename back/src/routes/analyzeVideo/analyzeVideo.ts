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
  const { body } = await c.req.valid("form");
  const analysis = await useAnalyzeVideo(modelConsultor, "", movement);

  if (body instanceof File) {
    const path = `../../../assets/${body.name}`;
    const buffer = await body.arrayBuffer();
    await writeFile(path, Buffer.from(buffer));
  }
  return c.json(analysis);
});

export default analyzeVideo;
