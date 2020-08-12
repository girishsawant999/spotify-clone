import * as actions from './actionTypes';
export const initialState = {
  // token:
  //   'BQAw02OlR8AecScPQgCUENqaAvL52htsZqOrtxHij0OsBi9Jz2UUSqsZz9huNDtgRPQg8ZPpw3J12V-7MYlJ312afhlV2ilLNjlHvPB40yoV5qJVZ_NYX9Gv_i2PXu_npgpN3HeXH-JE9ZfVCIDdzCBeDCVS_D-ccQORZnNwl6BWGvUq',
  user: null,
  playlists:[],
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
    default:
      return state;
  }
};
