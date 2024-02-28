import { writeFile } from "fs/promises";
import { dataStoragePath } from "../../utils/dataStoragePath";

export const saveVideo = async (video: File) => {
  try {
    const buffer = await video.arrayBuffer();
    await writeFile(dataStoragePath, Buffer.from(buffer));
  } catch (err) {
    throw new Error();
  }
};
