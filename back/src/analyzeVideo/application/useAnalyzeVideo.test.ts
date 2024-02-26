import { useAnalyzeVideo } from "./useAnalyzeVideo";
import { describe, it, jest, expect } from "bun:test";

const promise: Promise<string[]> = new Promise((resolve) => {
  resolve(["url", "url", "url", "url"]);
});
const consultModel = jest.fn(() => promise);

describe("useAnalyzeVideo()", () => {
  it("Retorna análisis del vídeo en forma de texto", async () => {
    const result = await useAnalyzeVideo(consultModel);
    expect(result).toBe("Análisis");
  });

  it("Ejecuta función pasada como argumento", () => {
    useAnalyzeVideo(consultModel);
    expect(consultModel).toHaveBeenCalled();
  });
});
