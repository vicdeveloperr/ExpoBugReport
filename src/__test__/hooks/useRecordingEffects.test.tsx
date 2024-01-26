import { renderHook, act } from "@testing-library/react-hooks";
import useRecordingEffects from "../../components/camerascreen/hooks/useRecordingEffects";
import recordVideo from "../../utils/recordVideo";
import { camRef } from "../../components/camerascreen/CameraView";
import type { RenderHookResult, Renderer } from "@testing-library/react-hooks";
import type { Camera } from "expo-camera";

jest.mock("../../utils/recordVideo", () =>
  jest.fn(async (camRef: React.RefObject<Camera>) => {
    return await new Promise((resolve) => {
      resolve("resolve.mp4");
    });
  })
);
jest.mock("../../components/camerascreen/hooks/useHandlerStates", () => () => {
  return {
    setIsTimerVisible: jest.fn(),
    startCountdown: jest.fn(),
    setIsRecording: jest.fn(),
    resetCountdown: jest.fn(),
  };
});
// jest.mock("../../../utils/stopVideoRecording"); // Mockeamos la función de detención

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

  it("Inicia grabación de vídeo al llamar a onStartRecording", async () => {
    const { onStartRecording } = useRecordingEffectsRenderResult.result.current;

    await onStartRecording();

    expect(recordVideo).toHaveBeenCalledWith(camRef);
  });

  it("debe navegar a la pantalla de carga de video después de grabar", async () => {
    const { result } = renderHook(() => useRecordingEffects());
    const { navigate } = result.current;

    recordVideo.mockResolvedValue(); // Simulamos una grabación exitosa

    await act(async () => {
      await result.current.onStartRecording();
    });

    expect(navigate).toHaveBeenCalledWith("loadVideo");
  });

  it("debe mostrar un error si la grabación falla", async () => {
    const { result } = renderHook(() => useRecordingEffects());
    const { setIsRecording } = result.current;

    recordVideo.mockRejectedValue("Error de grabación"); // Simulamos un error

    await act(async () => {
      await result.current.onStartRecording();
    });

    expect(setIsRecording).toHaveBeenCalledWith(false);
    // console.log no se puede testear directamente, pero se puede verificar si se llama
  });
});
