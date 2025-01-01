import { addSession, loadHistory, PomoSession } from "@/store/reducers/historySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import * as Crypto from "expo-crypto";
import { POMO_CONST } from "@/constants/Pomo";

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const { timeLeft, mode } = useSelector((state: RootState) => state.timer);
  const { currentTrack } = useSelector((state: RootState) => state.edm);

  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);

  useEffect(() => {
    if(timeLeft === 0) {
      if(mode === "work") {
        // セッション記録
        const endAt = new Date();
        const duration = POMO_CONST.WORK_TIME;
        const session: PomoSession = {
          id: Crypto.randomUUID(),
          startAt: endAt.getTime() - duration,
          endAt: endAt.getTime(),
          duration: POMO_CONST.WORK_TIME,
          edmTrackId: currentTrack ? currentTrack.id : "",
        }
        dispatch(addSession(session));
      }
    }
  }, [timeLeft, dispatch])
  return null;
}