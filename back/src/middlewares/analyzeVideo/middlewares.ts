import { handlerVideo } from "./handlerVideo";
import app from "../..";

app.post("/analyzeVideo", async (c, next) => {
  handlerVideo("video");
  await next();
});
