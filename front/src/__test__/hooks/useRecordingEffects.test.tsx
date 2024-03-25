import { renderHook } from "@testing-library/react-hooks";
import useRecordingEffects from "../../components/camerascreen/hooks/useRecordingEffects";
import useRecordVideo from "../../utils/useRecordVideo";
import type { RenderHookResult, Renderer } from "@testing-library/react-hooks";
import type { Camera } from "expo-camera";
import stopVideoRecording from "../../utils/stopVideoRecording";

jest.mock("../../utils/useRecordVideo", () =>
  jest.fn(async (camera: Camera) => {
    return await new Promise((resolve) => {
      resolve("resolve.mp4");
    });
  })
);

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

jest.mock("../../components/camerascreen/hooks/useHandlerStates", () => () => {
  return {
    setIsTimerVisible: jest.fn(),
    startCountdown: jest.fn(),
    setIsRecording: jest.fn(),
    resetCountdown: jest.fn(),
  };
});
jest.mock("../../utils/stopVideoRecording", () => jest.fn());

type RecordingEffectsRenderResult = RenderHookResult<
  unknown,
  {
    onStartRecording: () => Promise<void>;
    onStopRecording: () => void;
  },
  Renderer<unknown>
>;

describe("useRecordingEffects()", () => {
  let useRecordingEffectsRenderResult: RecordingEffectsRenderResult;
  beforeEach(() => {
    useRecordingEffectsRenderResult = renderHook(() => useRecordingEffects());
  });

  it("Devuelve onStartRecording y onStopRecording correctamente", async () => {
    const { onStartRecording, onStopRecording } =
      useRecordingEffectsRenderResult.result.current;

    expect(onStartRecording).toBeTruthy();
    expect(onStopRecording).toBeTruthy();
  });

  it("Inicia grabación de vídeo al llamar a onStartRecording()", async () => {
    const { onStartRecording } = useRecordingEffectsRenderResult.result.current;

    await onStartRecording();

    expect(useRecordVideo).toHaveBeenCalled();
  });

  it("Termina grabación del vídeo al ejecutar onStopRecording()", async () => {
    const { onStopRecording } = useRecordingEffectsRenderResult.result.current;

    onStopRecording();

    expect(stopVideoRecording).toHaveBeenCalled();
  });
});
