import FFmpeg from "ffmpeg";

type tFramesExtractor = (uri: string) => Promise<string[] | void>;

export const framesExtractor: tFramesExtractor = async (uri) => {
  try {
    var process = new FFmpeg(uri);
    await process
      .then((video) => {
        video.fnExtractFrameToJPG(
          "./",
          {
            frame_rate: 1,
            number: 5,
            file_name: "my_frame_%t_%s",
          },
          (error, files) => {
            if (!error) {
              console.log("Frames: " + files);
              return files;
            }
          }
        );
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  } catch (e) {
    console.log(e);
  }
};
