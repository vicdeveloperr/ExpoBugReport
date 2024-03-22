import { create } from "zustand";

interface RecordedStore {
  recorded: string | null;
  setRecorded: (newRecorded: string) => void;
}

const useRecordedStore = create<RecordedStore>((set) => ({
  recorded: null,
  setRecorded: (newRecorded) => {
    set({ recorded: newRecorded });
  },
}));

export default useRecordedStore;
