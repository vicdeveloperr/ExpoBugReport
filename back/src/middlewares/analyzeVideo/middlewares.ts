import app from "../..";
import { bodyValidator, paramsValidator } from "./validator";
import { mainEnpointUrl } from "../../utils/mainEnpointUrl";

app.post(`${mainEnpointUrl}:movement`, bodyValidator);

app.post(`${mainEnpointUrl}:movement`, paramsValidator);

export default app;
