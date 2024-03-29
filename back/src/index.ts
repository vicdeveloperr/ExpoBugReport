import { Hono } from "hono";
import analyzeVideo from "./routes/analyzeVideo/analyzeVideo";
import { mainEnpointUrl } from "./utils/mainEnpointUrl";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.get(
  "/speechs/*",
  serveStatic({
    root: "./",
  })
);

app.route(`${mainEnpointUrl}:movement`, analyzeVideo);

export default app;
