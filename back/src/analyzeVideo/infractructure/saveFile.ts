type tSaveFile = (
  file: string | Blob | NodeJS.TypedArray | ArrayBufferLike | Bun.BlobPart[],
  path: string
) => Promise<void>;

export const saveFile: tSaveFile = async (file, path) => {
  try {
    await Bun.write(path, file);
  } catch (err) {
    console.log(err);
  }
};
