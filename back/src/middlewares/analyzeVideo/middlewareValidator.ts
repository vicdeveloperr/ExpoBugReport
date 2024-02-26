import { validator } from "hono/validator";

interface Body {
  video: FormData;
  movement: "allen iverson cross";
}
export const middlewareValidator = validator("json", (value, c) => {
  const body: Body = value["body"];
  if (body.video != null && body.movement != null) {
    const message =
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo";
    return c.text(message, 400);
  }
  return body;
});
