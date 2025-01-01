import { RootState } from "@/store";
import { tick, setMode, toggleTimer } from "@/store/reducers/timerSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const { isRunning, timeLeft, mode } = useSelector((state: RootState) => state.timer);

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
        dispatch(toggleTimer());
        dispatch(setMode("shortBreak"));
        dispatch(toggleTimer());
      } else {
        dispatch(toggleTimer());
        dispatch(setMode("work"));
        dispatch(toggleTimer());
      }
    }
  }, [timeLeft, dispatch])
  return null;
}