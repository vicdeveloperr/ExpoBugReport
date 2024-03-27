import { Audio } from "expo-av";
import type { AVPlaybackSource } from "expo-av";

type playSoundType = (audio: AVPlaybackSource) => Promise<void>;
export const playSound: playSoundType = async (audio) => {
  const sound = new Audio.Sound();

  try {
    await sound.loadAsync(audio);
    await sound.playAsync();
    // await sound.unloadAsync();
  } catch (err) {
    console.log(err);
  }
};
