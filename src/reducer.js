import * as actions from "./actionTypes";
export const initialState = {
  loader: false,
  spotify: null,
  token: null,
  user: null,
  playlists: [],
  categories: {},
  recentTracks: {},
};

export const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case actions.LOADER_TRUE:
      return { ...state, loader: true };
    case actions.LOADER_FALSE:
      return { ...state, loader: false };
    case actions.SET_SPOTIFY:
      return { ...state, spotify: action.payload };
    case actions.SET_USER:
      return { ...state, user: action.payload };
    case actions.SET_TOKEN:
      return { ...state, token: action.payload };
    case actions.SET_PLAYLIST:
      return { ...state, playlists: action.payload };
    case actions.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case actions.SET_RECENT_TRACKS:
      return { ...state, recentTracks: action.payload };

    default:
      return state;
  }
};
