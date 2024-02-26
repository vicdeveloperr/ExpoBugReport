import { expect, it, mock } from "bun:test";
import app from "./";
import { getApiUrl } from "../../analyzeVideo/infractructure/getApiUrl.js";

const apiUrl = getApiUrl();

mock.module("../../analyzeVideo/application/useAnalyzeVideo.ts", () => mock());

it("POST /analyzeVideo", async () => {
  const videoToAnalyze = new FormData();
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
  expect(res.json()).toBe({
    message: "",
  });
});
