import { describe, it, expect } from "bun:test";
import app from "../..";
import { getApiUrl } from "../../utils/getApiUrl";
import { mainEnpointUrl } from "../../utils/mainEnpointUrl";

async function request(param: string) {
  const url = `${getApiUrl() + mainEnpointUrl}audioResponse/${param}`;
  const req = new Request(url);
  const res = await app.fetch(req);

  return res;
}

describe("GET /analyzeVideo/audioReponse", () => {
  it("Retorna status 400, si no se especifica un nombre de archivo como parámetro", async () => {
    const res = await request("");

    expect(res.status).toBe(400);
  });
  it("Retorna status 403, si se especifica un nombre de archivo que no existe", async () => {
    const res = await request("/fdsajfsask.mp3");

    expect(res.status).toBe(403);
  });
  it("Retorna status 200, si se especifica un nombre de archivo existente", async () => {
    const res = await request("speech.mp3");

    expect(res.status).toBe(200);
  });
});
