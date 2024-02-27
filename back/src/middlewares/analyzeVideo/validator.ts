import { validator as honoValidator } from "hono/validator";
import { movements } from "../../analyzeVideo/domain/types";

type tParamValidatorReturn = {
  movement: movements;
};

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
  const param: movements | string = value["movement"];
  if (param !== "allen iverson cross") {
    return c.text("Movimiento no especificado o incorrecto", 400);
  }
  return {
    movement: param,
  } as tParamValidatorReturn;
});
