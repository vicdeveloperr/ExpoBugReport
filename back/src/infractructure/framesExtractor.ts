import FFmpeg from "ffmpeg";

type tFramesExtractor = (uri: string) => string[] | void;

export const framesExtractor: tFramesExtractor = (uri) => {
  try {
    var process = new FFmpeg(uri);
    process
      .then((video) => {
        // Callback mode
        video.fnExtractFrameToJPG(
          "./",
          {
            frame_rate: 1,
            number: 5,
            file_name: "my_frame_%t_%s",
          },
          function (error, files) {
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
    console.log(e.code);
    console.log(e.msg);
  }
};
