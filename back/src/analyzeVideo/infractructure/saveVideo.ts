import path from "path";

export const saveVideo = async (video: File) => {
  const videoPath = path.resolve("../../../data", video.name);
  try {
    await Bun.write(videoPath, video);
  } catch (err) {
    console.log(err);
  }
};
