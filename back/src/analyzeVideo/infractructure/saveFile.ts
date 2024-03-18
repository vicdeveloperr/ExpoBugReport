export const saveFile = async (file: File, path: string) => {
  try {
    await Bun.write(path, file);
  } catch (err) {
    console.log(err);
  }
};
