import { createSlice } from "@reduxjs/toolkit";
import { Track } from "./edmSlice";

export type Playlist = {
  id: string;
  title: string;
  tracks: Track[];
}

interface PlaylistState {
  playlist: Playlist | null;
  currentIndex: number;
}

const initialState: PlaylistState = {
  playlist: null,
  currentIndex: 0
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    resetPlaylist: (state) => {
      state.playlist = initialState.playlist;
      state.currentIndex = 0;
    },
    nextTrack: (state) => {
      if (!state.playlist) {
        return;
      }
      if (state.currentIndex + 1 >= state.playlist.tracks.length) {
        return;
      }
      state.currentIndex = (state.currentIndex + 1) % state.playlist.tracks.length;
    },
  }
})

export const { setPlaylist, nextTrack, resetPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;