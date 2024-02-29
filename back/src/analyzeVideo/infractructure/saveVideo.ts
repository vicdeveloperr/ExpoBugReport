import path from "path";

export const saveVideo = async (video: File) => {
  const videoPath = path.resolve("../../../data/video.mp4");
  try {
    const buffer = await video.arrayBuffer();
    await Bun.write(videoPath, Buffer.from(buffer));
  } catch (err) {
    console.log(err);
  }
};
