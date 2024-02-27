import app from "../..";
import { bodyValidator, paramsValidator } from "./validator";

app.post("/analyzeVideo/:movement", bodyValidator);

app.post("/analyzevideo/:movement", paramsValidator);
