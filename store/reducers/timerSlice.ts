import { createSlice } from '@reduxjs/toolkit';
import { POMO_CONST, POMO_EVENTS } from '@/constants/Pomo';

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  mode: "work" | "break";
}

const initialState: TimerState = {
  timeLeft: POMO_CONST.WORK_TIME,
  isRunning: false,
  mode: "work",
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    toggleTimer: (state) => {
      state.isRunning = !state.isRunning;
    },
    setMode: (state, action) => {
      switch (action.payload) {
        case "work":
          state.mode = "work";
          state.timeLeft = POMO_CONST.WORK_TIME;
          break;
        case "shortBreak":
          state.mode = "break";
          state.timeLeft = POMO_CONST.SHORT_BREAK_TIME;
          break;
        case "longBreak":
          state.mode = "break";
          state.timeLeft = POMO_CONST.LONG_BREAK_TIME;
          break;
      }
    },
    tick: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
    }
  }
})

export const { toggleTimer, setMode, tick } = timerSlice.actions;
export default timerSlice.reducer;