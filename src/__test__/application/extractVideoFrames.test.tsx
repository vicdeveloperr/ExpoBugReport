describe("extractVideoFrames()", () => {
  it("Al invocarlo con un vídeo como argumento, retorna un array con 4 URLs", () => {
    const { images } = extractVideoFrames();
    expect(images.lenght).toBe(4);
  });
});
