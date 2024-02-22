import { extractVideoFrames } from "../../application/extractVideoFrames";

const framesExtractor = jest.fn(() => ["url", "url", "url", "url"]);

describe("extractVideoFrames()", () => {
  it("Al invocarlo con una función como argumento, retorna un array con 4 URLs", () => {
    const images = extractVideoFrames(framesExtractor);
    expect(images.length).toBe(4);
  });
});
