import { ChatResponse } from "ollama";

export interface Video extends FormData {
  uri: string;
  name: string;
  type: string;
}

export type tFramesExtractor = (uri: string) => Promise<string[] | void>;

export type tModelConsultor = (videoUri: string) => Promise<ChatResponse>;

export type movements = "allen iverson cross";
