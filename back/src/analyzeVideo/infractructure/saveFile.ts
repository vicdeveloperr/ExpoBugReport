import { join as pathJoin } from "path";

type tSaveFile = (
  file: string | Blob | NodeJS.TypedArray | ArrayBufferLike | Bun.BlobPart[],
  path: string
) => Promise<void>;

import { storageDataPath } from "./storageDataPath";

export const saveFile: tSaveFile = async (file, path) => {
  try {
    const filePath = pathJoin(storageDataPath, path);
    await Bun.write(filePath, file);
  } catch (err) {
    console.log(err);
  }
};
