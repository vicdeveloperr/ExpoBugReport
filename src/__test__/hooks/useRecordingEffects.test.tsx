import { renderHook } from "@testing-library/react-hooks";
import useRecordingEffects from "../../components/camerascreen/hooks/useRecordingEffects";
import recordVideo from "../../../utils/recordVideo"; // Mockearemos esto
import stopVideoRecording from "../../../utils/stopVideoRecording"; // Mockearemos esto
import { camRef } from "../CameraView";
import { act } from "react-dom/test-utils"; // Simula el ciclo de vida de React
import useHandlerStates from "../../components/camerascreen/hooks/useHandlerStates";

jest.mock("../../../utils/recordVideo"); // Mockeamos la función de grabación
jest.mock("../../components/camerascreen/hooks/useHandlerStates", () => ({ setIsTimerVisible: jest.fn(), startCountdown: jest.fn() }))
jest.mock("../../../utils/stopVideoRecording"); // Mockeamos la función de detención

describe("useRecordingEffects", () => {
  it("debe iniciar el temporizador y la grabación al llamar a `onStartRecording`", async () => {
    const { result } = renderHook(() => useRecordingEffects());
    const { setIsTimerVisible, startCountdown } = useHandlerStates();

    await act(async () => { await result.current.onStartRecording(); });

    expect(setIsTimerVisible).toHaveBeenCalledWith(true);
    expect(startCountdown).toHaveBeenCalledWith(expect.any(Function));
  });

  it("debe detener el temporizador y la grabación al llamar a `onStopRecording`", () => {
    const { result } = renderHook(() => useRecordingEffects());
    const { setIsRecording, stopVideoRecording, resetCountdown } = result.current;

    act(() => { result.current.onStopRecording(); });

    expect(stopVideoRecording).toHaveBeenCalledWith(camRef);
    expect(resetCountdown).toHaveBeenCalled();
    expect(setIsRecording).toHaveBeenCalledWith(false);
  });

  it("debe navegar a la pantalla de carga de video después de grabar", async () => {
    const { result } = renderHook(() => useRecordingEffects());
    const { navigate } = result.current;

    recordVideo.mockResolvedValue(); // Simulamos una grabación exitosa

    await act(async () => { await result.current.onStartRecording(); });

    expect(navigate).toHaveBeenCalledWith("loadVideo");
  });

  it("debe mostrar un error si la grabación falla", async () => {
    const { result } = renderHook(() => useRecordingEffects());
    const { setIsRecording } = result.current;

    recordVideo.mockRejectedValue("Error de grabación"); // Simulamos un error

    await act(async () => { await result.current.onStartRecording(); });

    expect(setIsRecording).toHaveBeenCalledWith(false);
    // console.log no se puede testear directamente, pero se puede verificar si se llama
  });
});
