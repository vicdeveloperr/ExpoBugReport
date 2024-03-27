import { rmdir } from "node:fs/promises";
import { storageDataPath } from "./storageDataPath";

export const cleaner = async () => {
  try {
    await rmdir(storageDataPath);
  } catch (err) {
    console.log(err);
  }
};
