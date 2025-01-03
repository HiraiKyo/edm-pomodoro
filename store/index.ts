import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './reducers/timerSlice';
import edmReducer from './reducers/edmSlice';
import historyReducer from './reducers/historySlice';
import playlistReducer from './reducers/playlistSlice';
import settingReducer from './reducers/settingSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    edm: edmReducer,
    history: historyReducer,
    playlist: playlistReducer,
    setting: settingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;