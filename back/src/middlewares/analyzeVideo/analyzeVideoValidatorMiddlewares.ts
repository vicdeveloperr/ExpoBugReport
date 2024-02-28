import { bodyValidator, paramsValidator } from "./validators";
import { mainEnpointUrl } from "../../utils/mainEnpointUrl";
import { Hono } from "hono";

const analyzeVideoValidatorMiddlewares = new Hono();

analyzeVideoValidatorMiddlewares.post(
  `${mainEnpointUrl}:movement`,
  bodyValidator
);

analyzeVideoValidatorMiddlewares.post(
  `${mainEnpointUrl}:movement`,
  paramsValidator
);

export default analyzeVideoValidatorMiddlewares;
