import { addSession, loadHistory, PomoSession } from "@/store/reducers/historySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import * as Crypto from "expo-crypto";
import { POMO_CONST } from "@/constants/Pomo";

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const { timeLeft, mode } = useSelector((state: RootState) => state.timer);
  const { playlist } = useSelector((state: RootState) => state.playlist);

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
          playlist: {
            id: playlist?.id ?? "",
            title: playlist?.title ?? "",
          }
        }
        dispatch(addSession(session));
      }
    }
  }, [timeLeft, dispatch])
  return null;
}