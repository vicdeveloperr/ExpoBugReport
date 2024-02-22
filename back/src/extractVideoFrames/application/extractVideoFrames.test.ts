import { extractVideoFrames } from "./extractVideoFrames";
import { describe, it, jest, expect } from "bun:test";

const framesExtractor = jest.fn(() => ["url", "url", "url", "url"]);

describe("extractVideoFrames()", () => {
  it("Retorna array con los frames del vídeo", () => {
    const result = extractVideoFrames(framesExtractor);
    expect(result.length).toBe(4);
  });

  it("Ejecuta función pasada como argumento", () => {
    extractVideoFrames(framesExtractor);
    expect(framesExtractor).toHaveBeenCalled();
  });
});
