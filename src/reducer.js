export const initialState = {
  loader: false,
  spotify: null,
  token: null,
  user: null,
  playlists: [],
  categories: null,
  recentTracks: {},
  currentTrack: null,
  play: false,
};

export const reducer = (state, newState) => {
  return { ...state, ...newState };
};
