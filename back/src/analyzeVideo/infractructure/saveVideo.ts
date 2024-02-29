import { writeFile } from "fs/promises";
import path from "path";

export const saveVideo = async (video: File) => {
  const videoPath = path.resolve("../../../data/video.mp4");
  try {
    const buffer = await video.arrayBuffer();
    await writeFile(videoPath, Buffer.from(buffer));
  } catch (err) {
    console.log(err);
  }
};
