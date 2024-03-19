import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import type { google } from "@google-cloud/text-to-speech/build/protos/protos";
import { saveFile } from "./saveFile";

type tSpeechGenerator = (text: string) => Promise<string | unknown>;

export const speechGenerator: tSpeechGenerator = async (text) => {
  const client = new TextToSpeechClient();

  const request: google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: { languageCode: "es-ES", ssmlGender: "MALE" },
    audioConfig: { audioEncoding: "MP3" },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    if (response.audioContent) {
      const path = "output.mp3";
      await saveFile(response.audioContent, "output.mp3");
      console.log("Audio content written to file: output.mp3");
      return path;
    }
  } catch (err) {
    return err;
  }
};
