import { extractVideoFrames } from "../../application/extractVideoFrames";

const framesExtractor = jest.fn(() => ["url", "url", "url", "url"]);

describe("extractVideoFrames()", () => {
  it("Al invocarlo con una función como argumento, retorna un array con 4 URLs", () => {
    const result = extractVideoFrames(framesExtractor);
    expect(result.length).toBe(4);
  });

  it("Ejecuta función pasada como argumento", () => {
    extractVideoFrames(framesExtractor);
    expect(framesExtractor).toHaveBeenCalled();
  });
});
