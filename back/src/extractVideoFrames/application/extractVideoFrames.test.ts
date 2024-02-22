import { extractVideoFrames } from "./extractVideoFrames";
import { describe, it, jest, expect } from "bun:test";

const promise: Promise<string[]> = new Promise((resolve) => {
  resolve(["url", "url", "url", "url"]);
});
const framesExtractor = jest.fn(() => promise);

describe("extractVideoFrames()", () => {
  it("Retorna array con los frames del vídeo", async () => {
    const result = await extractVideoFrames(framesExtractor, "");
    expect(result?.length).toBe(4);
  });

  it("Ejecuta función pasada como argumento", () => {
    extractVideoFrames(framesExtractor, "");
    expect(framesExtractor).toHaveBeenCalled();
  });
});
