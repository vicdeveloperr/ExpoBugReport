describe("extractVideoFrames()", () => {
  it("Al invocarlo con un vídeo como argumento, retorna 4 frames del vídeo", () => {
    const { images } = extractVideoFrames();
    expect(images.lenght).toBe(4);
  });
  it("Al invocarlo con un vídeo como argumento, retorna url en dónde se almacenan los frames extraídos", () => {
    const { url } = extractVideoFrames();
    expect(url).toBeTruthy();
  });
});
