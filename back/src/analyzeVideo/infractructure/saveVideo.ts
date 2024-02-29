import path from "path";

export const saveVideo = async (video: File) => {
  try {
    await Bun.write(video.name, video);
  } catch (err) {
    console.log(err);
  }
};
