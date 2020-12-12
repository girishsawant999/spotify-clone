import { checkLocalStorageCompatibility } from './Utils';

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
  if (newState.action)
    switch (newState.action) {
      case 'LOGOUT':
        checkLocalStorageCompatibility() && localStorage.removeItem('_token');
        return initialState;
      default:
        break;
    }
  // Updating the state
  return { ...state, ...newState };
};
