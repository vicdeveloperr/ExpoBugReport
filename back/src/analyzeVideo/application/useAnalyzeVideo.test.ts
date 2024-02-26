import { resolve } from "bun";
import { useAnalyzeVideo } from "./useAnalyzeVideo";
import { describe, it, mock, expect } from "bun:test";

const promise = new Promise((resolve) => {
  resolve({
    message: {
      content: "",
    },
  });
});
const consultModel = mock((videoUrl, movement) => promise);

async function callUseAnalyzeVideo() {
  const result = await useAnalyzeVideo(consultModel, "", "allen iverson cross");
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
