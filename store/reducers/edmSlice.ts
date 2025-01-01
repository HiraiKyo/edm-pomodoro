import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AVPlaybackSource } from "expo-av/build/AV";

type Track = {
  id: string;
  title: string;
  source: AVPlaybackSource;
  bpm: number;
}

interface EdmState {
  currentTrack: Track | null;
  bpm: number;
}

const initialState: EdmState = {
  currentTrack: {
    id: "1",
    title: "DOCTOR VOX - Frontier",
    source: require("../../assets/edm/DOCTOR_VOX_-_Frontier.mp3"),
    bpm: 128,
  },
  bpm: 128,
};

const edmSlice = createSlice({
  name: "edm",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setBpm: (state, action: PayloadAction<number>) => {
      state.bpm = action.payload;
    },
  },
});

export const { setTrack, setBpm } = edmSlice.actions;
export default edmSlice.reducer;