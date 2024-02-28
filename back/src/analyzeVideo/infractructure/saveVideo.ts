import { writeFile } from "fs/promises";

export const saveVideo = async (video: File) => {
  const path = "../../../data";
  try {
    const buffer = await video.arrayBuffer();
    await writeFile(path, Buffer.from(buffer));
  } catch (err) {
    throw new Error();
  }
};
