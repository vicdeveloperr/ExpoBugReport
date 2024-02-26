import { validator } from "hono/validator";
import { schema } from "./schema";

export const middlewareValidator = validator("form", (value, c) => {
  const parsed = schema.safeParse(value);
  if (!parsed.success) {
    const message =
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo";
    return c.text(message, 400);
  }
  return parsed.data;
});
