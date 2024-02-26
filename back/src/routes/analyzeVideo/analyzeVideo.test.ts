import { expect, it, mock } from "bun:test";
import app from "./index.ts";
import { getApiUrl } from "../../extractVideoFrames/infractructure/getApiUrl.js";

const apiUrl = getApiUrl();

mock.module("../../analyzeVideo/application/useAnalyzeVideo.ts", () => mock());

it("POST /analyzeVideo", async () => {
  const videoToAnalyze = new FormData();
  const req = new Request(apiUrl, {
    body: videoToAnalyze,
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
