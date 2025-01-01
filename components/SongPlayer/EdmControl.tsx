import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "expo-av";
import { current } from "@reduxjs/toolkit";

/**
 * EDMを再生するプレイヤーのコントロール
 */
export default () => {
  const dispatch = useDispatch();
  const { isRunning, mode } = useSelector((state: RootState) => state.timer);
  const { currentTrack } = useSelector((state: RootState) => state.edm);

  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    (async () => {
      if (currentTrack) {
        const { sound } = await Audio.Sound.createAsync(currentTrack.source);

        setSound(sound);
      } else {
        setSound(null);
      }
    })();
  }, [currentTrack, dispatch]);

  useEffect(() => {
    if (mode === "work") {
      if(isRunning) {
        sound?.playAsync();
      } else {
        sound?.pauseAsync();
      }
    } else { 
      sound?.pauseAsync();
    }
  }, [isRunning, mode, dispatch])
  return null;
}