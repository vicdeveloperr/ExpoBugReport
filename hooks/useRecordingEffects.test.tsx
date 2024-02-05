import { renderHook, act } from "@testing-library/react-hooks";
import useRecordingEffects from "./useRecordingEffects";
import mockRecordVideo from "../../../utils/recordVideo.mock";
import mockStopVideoRecording from "../../../utils/stopVideoRecording.mock";
import { useNavigation } from "@react-navigation/native";

describe("useRecordingEffects", () => {
  let navigationMock;

  beforeEach(() => {
    navigationMock = useNavigation();
  });

  it("should set timer visible and start countdown on start", async () => {
    const { result } = renderHook(() => useRecordingEffects());
    const { setIsTimerVisible, startCountdown } = result.current;

    await result.current.onStartRecording();

    expect(setIsTimerVisible).toHaveBeenCalledWith(true);
    expect(startCountdown).toHaveBeenCalledWith(expect.any(Function));
  });

  it("should set recording state and navigate to loadVideo on record finished", async () => {
    mockRecordVideo.mockResolvedValue();
    const { result } = renderHook(() => useRecordingEffects(), {
      mocks: { recordVideo: mockRecordVideo, useNavigation: mockNavigation },
    });
    const { setIsRecording, resetCountdown, navigate } = result.current;

    act(() => result.current.onStartRecording());

    expect(setIsRecording).toHaveBeenCalledWith(false);
    expect(navigate).toHaveBeenCalledWith("loadVideo");
  });

  it("should handle recording errors properly", async () => {
    mockRecordVideo.mockRejectedValue("Error de grabación");
    const { result } = renderHook(() => useRecordingEffects(), {
      mocks: { recordVideo: mockRecordVideo },
    });
    const { setIsRecording, resetCountdown } = result.current;

    act(() => result.current.onStartRecording());

    expect(setIsRecording).toHaveBeenCalledWith(false);
    expect(resetCountdown).toHaveBeenCalledTimes(1);
  });

  it("should stop recording and reset state on stop", async () => {
    mockStopVideoRecording.mockReturnValue();
    const { result } = renderHook(() => useRecordingEffects(), {
      mocks: { stopVideoRecording, useNavigation: mockNavigation },
    });
    const { onStopRecording, resetCountdown, setIsRecording } = result.current;

    act(() => onStopRecording());

    expect(stopVideoRecording).toHaveBeenCalledWith(expect.any(Object));
    expect(resetCountdown).toHaveBeenCalledTimes(1);
    expect(setIsRecording).toHaveBeenCalledWith(false);
  });
});
