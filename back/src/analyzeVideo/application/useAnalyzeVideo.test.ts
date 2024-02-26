import { useAnalyzeVideo } from "./useAnalyzeVideo";
import { describe, it, mock, expect } from "bun:test";

const promise: Promise<string> = new Promise((resolve) => {
  resolve("");
});
const consultModel = mock(() => promise);

async function callUseAnalyzeVideo() {
  const result = await useAnalyzeVideo(consultModel, "");
  return result;
}

describe("useAnalyzeVideo()", () => {
  it("Retorna análisis del vídeo en forma de texto", async () => {
    const result = await callUseAnalyzeVideo();
    expect(result).toEqual({
      message: "",
    });
  });

  it("Ejecuta función pasada como argumento", async () => {
    await callUseAnalyzeVideo();
    expect(consultModel).toHaveBeenCalled();
  });
});
