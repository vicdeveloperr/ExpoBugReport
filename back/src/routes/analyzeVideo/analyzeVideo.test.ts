import { describe, expect, it, mock } from "bun:test";
import { getApiUrl } from "../../analyzeVideo/infractructure/getApiUrl.js";
import app from "../../index";

const apiUrl = getApiUrl();

mock.module("../../analyzeVideo/application/useAnalyzeVideo.ts", () => mock());

describe("POST /analyzeVideo", () => {
  it("Retorna status 200 y análisis generado por la IA, si el cuerpo de la solicitud es correcto", async () => {
    const videoToAnalyze = new FormData();
    videoToAnalyze.append("video", {
      uri: "",
      name: "video.mp4",
      type: "video/mp4",
    } as any);
    const requestBody = {
      video: videoToAnalyze,
      movement: "allen iverson cross",
    };
    const req = new Request(`${apiUrl}/analyzeVideo`, {
      body: JSON.stringify(requestBody),
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const res = await app.request(req);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      message: "",
    });
  });

  it("Retorna 400 y un mensaje de que el video no ha podido ser procesado, si el cuerpo de la solicitud no es el esperado", async () => {
    const req = new Request(`${apiUrl}/analyzeVideo`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const errorMsg =
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo";
    const res = await app.request(req);
    expect(await res.text()).toBe(errorMsg);
    expect(res.status).toBe(200);
  });
});
