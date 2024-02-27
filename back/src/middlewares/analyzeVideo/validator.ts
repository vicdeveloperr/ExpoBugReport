import { validator as honoValidator } from "hono/validator";

interface Body {
  video: FormData;
  movement: "allen iverson cross";
}
export const validator = honoValidator("json", async (value, c) => {
  const body = await c.req.parseBody();
  if (body.video != null && body.movement != null) {
    const message =
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo";
    return c.text(message, 400);
  }
  return body;
});
