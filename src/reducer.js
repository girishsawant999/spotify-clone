import * as actions from './actionTypes';
export const initialState = {
  token: null,
  user: null,
  playlists: [],
  categories: [],
  currentCategory: {},
  recentTracks: {},
};

export const reducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case actions.SET_USER:
      return { ...state, user: action.payload };
    case actions.SET_TOKEN:
      return { ...state, token: action.payload };
    case actions.SET_PLAYLIST:
      return { ...state, playlists: action.payload };
    case actions.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case actions.SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case actions.SET_RECENT_TRACKS:
      return { ...state, recentTracks: action.payload };

    default:
      return state;
  }
};
