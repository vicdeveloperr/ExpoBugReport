import { Hono } from "hono";
import analyzeVideo from "./routes/analyzeVideo/analyzeVideo";

const app = new Hono();

app.route("/analyzeVideo", analyzeVideo);

export default app;
