import { renderHook, act } from '@testing-library/react-hooks';
// import useVideoTutorialControllerAction from '../../../components/videoTutorial/hooks/useVideoTutorialControllerAction';
import { videoRef } from '../../components/videoTutorial/VideoTutorial';
import { useVideoPlayerStore } from '../../stateManagement';

jest.mock("../../stateManagement/useBtnPlayModalStore", () => () => ({
    isPlaying: true,
    setIsPlaying: jest.fn()
}))
jest.mock("../../stateManagement/useVideoPlayerStore", () => () => ({
    toggleBtnPlay: jest.fn()
}))

const mockedVideoRef = {
    current: {
      pauseAsync: jest.fn(),
      playAsync: jest.fn(),
    },
  };
jest.mock('../../components/videoTutorial/VideoTutorial', () => ({
    videoRef: mockedVideoRef
}))

let togglePlay: () => void;

function renderUseVideoTutorialControllerActionWithIsPlayingIn(isPlaying = false): void {
    const mockedVideoPlayerStore = useVideoPlayerStore();
    mockedVideoPlayerStore.mockReturnValueOnce({
        isPlaying,
        setIsPlaying: jest.fn()
    })

    const { result: togglePlay } = renderHook(() => useVideoTutorialControllerAction());
}

describe('useVideoTutorialControllerAction()', () => { 
it('Retorna la función togglePlay()', () => {
    renderUseVideoTutorialControllerActionWithIsPlayingIn(false);
    expect(togglePlay).toBeInstanceOf(Function);
  });

  it('togglePlay invoca playAsync(), cuando isPlaying == false', () => {
    act(() => {
      togglePlay(); 
    });

    expect(mockedVideoRef.current.playAsync).toHaveBeenCalledTimes(1);
  });

  it('togglePlay invoca pauseAsync(), cuando isPlaying == true', () => {
    renderUseVideoTutorialControllerActionWithIsPlayingIn(true);

    act(() => {
      togglePlay(); 
    });

    expect(mockedVideoRef.current.pauseAsync).toHaveBeenCalled()
  });
});
