import { renderHook } from '@testing-library/react-hooks';
import { useVideoTutorialControllerAction } from '../../components/videoTutorial/hooks/useVideoTutorialControllerAction';

jest.mock("../../stateManagement/useBtnPlayModalStore", () => jest.fn(() => ({
  isPlaying: true,
  setIsPlaying: jest.fn()
})))
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

describe('useVideoTutorialControllerAction()', () => {
  it('Retorna la función togglePlay()', () => {
    const { result } = renderHook(() => useVideoTutorialControllerAction());
    const togglePlay = result.current.togglePlay;
    
    expect(togglePlay).toBeInstanceOf(Function);
  });

  // it('togglePlay invoca playAsync(), cuando isPlaying == false', () => {
  //   act(() => {
  //     togglePlay(); 
  //   });

  //   expect(mockedVideoRef.current.playAsync).toHaveBeenCalledTimes(1);
  // });

  // it('togglePlay invoca pauseAsync(), cuando isPlaying == true', () => {
  //   renderUseVideoTutorialControllerActionWithIsPlayingIn(true);

  //   act(() => {
  //     togglePlay(); 
  //   });

  //   expect(mockedVideoRef.current.pauseAsync).toHaveBeenCalled()
  // });
});
