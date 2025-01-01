import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerSlice';
import edmReducer from './reducers/edmSlice';
import historyReducer from './reducers/historySlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    edm: edmReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;