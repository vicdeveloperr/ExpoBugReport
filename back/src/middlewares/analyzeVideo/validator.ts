import { validator as honoValidator } from "hono/validator";

export const bodyValidator = honoValidator("form", async (value, c) => {
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

export const paramsValidator = honoValidator("param", (value, c) => {
  const params = value["movement"];
  if (typeof params != "string") {
    return c.text("Movimiento no especificado", 400);
  }
  return params;
});
