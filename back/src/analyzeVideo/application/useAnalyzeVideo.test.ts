import { useAnalyzeVideo } from "./useAnalyzeVideo";
import { describe, it, mock, expect } from "bun:test";

const consultModel = mock();

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
