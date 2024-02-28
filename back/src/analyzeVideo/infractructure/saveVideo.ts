import { writeFile } from "fs/promises";

export const saveVideo = async (video: File, path: string) => {
  try {
    const buffer = await video.arrayBuffer();
    await writeFile(path, Buffer.from(buffer));
  } catch (err) {
    throw new Error();
  }
};
