import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const STORAGE_KEY = "@pomo_history";

export type PomoSession = {
  id: string;
  startAt: number;
  endAt: number;
  duration: number;
  edmTrackId: string;
}

interface HistoryState {
  sessions: PomoSession[];
}

const initialState: HistoryState = {
  sessions: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addSession: (state, action: PayloadAction<PomoSession>) => {
      state.sessions.push(action.payload);
      // 保存
      saveHistory(state.sessions);
    },
  },
});

export const loadHistory = createAsyncThunk(
  "history/load",
  async () => {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
)

export const saveHistory = createAsyncThunk(
  "history/save",
  async (sessions: PomoSession[]) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    return sessions;
  }
);

export const { addSession } = historySlice.actions;
export default historySlice.reducer;