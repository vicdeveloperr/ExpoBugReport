import { describe, expect, it, mock } from "bun:test";
import { getApiUrl } from "../../analyzeVideo/infractructure/getApiUrl.js";
import app from "../../index";

const apiUrl = getApiUrl();

mock.module("../../analyzeVideo/application/useAnalyzeVideo.ts", () => mock());

function request(body: FormData) {
  const req = new Request(`${apiUrl}/analyzeVideo/allen iverson cross`, {
    body: body,
    method: "POST",
  });

  return req;
}

describe("POST /analyzeVideo", () => {
  it("Retorna status 200 y análisis generado por la IA, si el cuerpo de la solicitud es correcto", async () => {
    const videoToAnalyze = new FormData();
    videoToAnalyze.append("file", {
      uri: "",
      name: "video.mp4",
      type: "video/mp4",
    } as any);
    // const requestBody = {
    //   video: videoToAnalyze,
    //   movement: "allen iverson cross",
    // };
    const req = request(videoToAnalyze);

    const res = await app.request(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      message: "",
    });
  });
});
