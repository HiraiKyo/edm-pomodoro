import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudioPlayer } from "expo-audio";
import { resetTrack, setTrack } from "@/store/reducers/edmSlice";
import { nextTrack } from "@/store/reducers/playlistSlice";

/**
 * EDMを再生するプレイヤーのコントロール
 */
export default () => {
  const dispatch = useDispatch();
  const { playlist, currentIndex } = useSelector((state: RootState) => state.playlist);
  const { isRunning, mode } = useSelector((state: RootState) => state.timer);
  const { currentTrack } = useSelector((state: RootState) => state.edm);

  const player = useAudioPlayer(currentTrack?.source)

  // プレイリストに対応したトラックを設定する
  useEffect(() => {
    if (playlist) {
      dispatch(setTrack(playlist.tracks[currentIndex]));
    } else {
      dispatch(resetTrack());
    }
  }, [playlist, currentIndex, dispatch]);

  // トラックの変更に対応して音楽のロードを行う
  useEffect(() => {
    (async () => {
      if (currentTrack) {
        // 前のsoundインスタンスをクリーンアップ
        if (sound) {
          await sound.stopAsync();
          await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(currentTrack.source);
        setSound(newSound);
        newSound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
          if (status.isLoaded && status.didJustFinish) {
            dispatch(nextTrack());
          }
        });
      }
    })();
  }, [currentTrack, dispatch]);

  // ポモドーロタイマーに対応して音楽の再生・停止を行う
  useEffect(() => {
    const controlSound = async () => {
      if (!sound) return;

      try {
        if (mode === "work" && isRunning) {
          await sound.playAsync();
        } else {
          await sound.stopAsync();
        }
      } catch (error) {
        console.error('Sound control error:', error);
      }
    };

    controlSound();
  }, [isRunning, mode, sound]);

  // コンポーネントのアンマウント時にsoundをクリーンアップ
  useEffect(() => {
    return () => {
      if (sound) {
        sound.stopAsync().then(() => {
          sound.unloadAsync();
        });
      }
    };
  }, []);

  return null;
}