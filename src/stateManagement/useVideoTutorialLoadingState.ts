import {create} from "zustand";

interface VideoTutorialLoadingState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const useVideoTutorialLoadingState = create<VideoTutorialLoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => { set(() => ({ isLoading: loading })); },
}));

export default useVideoTutorialLoadingState;
