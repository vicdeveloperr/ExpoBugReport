import { writeFile } from "fs/promises";
import path from "path";

export const saveVideo = async (video: File) => {
  const storageData = path.resolve("../../../data");
  try {
    const buffer = await video.arrayBuffer();
    await writeFile(storageData, Buffer.from(buffer));
  } catch (err) {
    console.log(err);
  }
};
