import { describe, expect, it, mock } from "bun:test";
import { getApiUrl } from "../../utils/getApiUrl.js";
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
  it("Retorna status 400 y mensaje de error, si no se envía vídeo correctamente en el cuerpo de la solicitud", async () => {
    const videoToAnalyze = new FormData();
    const req = request(videoToAnalyze);

    const res = await app.fetch(req);
    expect(await res.text()).toBe(
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo"
    );
    expect(res.status).toBe(400);
  });
});
