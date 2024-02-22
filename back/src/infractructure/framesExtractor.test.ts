import { describe, it, expect } from "bun:test";

describe("framesExtractor()", () => {
  it("Retorna array de frames del vídeo pasado como argumento", async () => {
    const videoUrl =
      "https://player.vimeo.com/external/454804335.hd.mp4?s=3b45d2b6dcad98317fab4904f4645710a8f9a3cc&profile_id=174&oauth2_token_id=57447761";
    const result = await framesExtractor(videoUrl);

    expect(result.length).toBeDefined();
  });
});
