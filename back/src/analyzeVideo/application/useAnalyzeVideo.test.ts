import { resolve } from "bun";
import { useAnalyzeVideo } from "./useAnalyzeVideo";
import { describe, it, mock, expect } from "bun:test";
import { ChatResponse } from "ollama";

const promise: Promise<ChatResponse> = new Promise((resolve) => {
  resolve({
    message: {
      content: "",
    },
  } as ChatResponse);
});
const consultModel = mock((videoUrl, movement) => promise);

async function callUseAnalyzeVideo() {
  const result = await useAnalyzeVideo(
    consultModel,
    new File([], ""),
    "allen iverson cross"
  );
  return result;
}

describe("useAnalyzeVideo()", () => {
  it("Retorna análisis del vídeo en forma de audio", async () => {
    const result = await callUseAnalyzeVideo();
    expect(result).toEqual({
      audio: "audio.mp3",
    });
  });

  it("Ejecuta función pasada como argumento", async () => {
    await callUseAnalyzeVideo();
    expect(consultModel).toHaveBeenCalled();
  });
});
