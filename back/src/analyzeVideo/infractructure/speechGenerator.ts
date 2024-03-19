import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import type { google } from "@google-cloud/text-to-speech/build/protos/protos";
import { saveFile } from "./saveFile";
import { join as pathJoin } from "path";
import { storageDataPath } from "./storageDataPath";
import uniqid from "uniqid";

type tSpeechGenerator = (text: string) => Promise<string | void>;

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
      const filename = uniqid("speech-");
      const path = pathJoin(storageDataPath, `${filename}.mp3`);
      await saveFile(response.audioContent, path);
      console.log("Audio content written to file: output.mp3");
      return path;
    }
  } catch (err) {
    console.log(err);
  }
};
