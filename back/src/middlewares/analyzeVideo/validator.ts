import { validator as honoValidator } from "hono/validator";

export const validator = honoValidator("form", async (value, c) => {
  const body = value["body"];
  if (!body || typeof body !== "string") {
    const message =
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo";
    return c.text(message, 400);
  }
  return {
    body: body,
  };
});
