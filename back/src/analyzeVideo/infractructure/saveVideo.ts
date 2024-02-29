import path from "path";

export const saveVideo = async (video: File) => {
  const videoPath = path.resolve("../../../data");
  try {
    await Bun.write(`../../../data/${video.name}`, video);
  } catch (err) {
    console.log(err);
  }
};
