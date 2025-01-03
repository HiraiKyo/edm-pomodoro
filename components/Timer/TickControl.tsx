import { playlists } from "@/data/generated-playlists";
import { RootState } from "@/store";
import { resetPlaylist } from "@/store/reducers/playlistSlice";
import { tick, setMode, startTimer, stopTimer } from "@/store/reducers/timerSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const { isRunning, timeLeft, mode } = useSelector((state: RootState) => state.timer);
  const { playlist } = useSelector((state: RootState) => state.playlist);

  /** Tick */
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, dispatch])

  useEffect(() => {
    if(timeLeft === 0) {
      if(mode === "work") {
        dispatch(setMode("shortBreak"));
        dispatch(resetPlaylist());
      } else {
        dispatch(setMode("work"));
        if(!playlist) {
          dispatch(stopTimer());
        }
      }
    }
  }, [timeLeft, playlist, dispatch])
  return null;
}