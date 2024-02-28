import { Hono } from "hono";
import analyzeVideo from "./routes/analyzeVideo/analyzeVideo";
import { mainEnpointUrl } from "./utils/mainEnpointUrl";

const app = new Hono();

app.route(`${mainEnpointUrl}:movement`, analyzeVideo);

export default app;
