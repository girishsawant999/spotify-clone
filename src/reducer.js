import * as actions from './actionTypes';
export const initialState = {
  user: null,
};

export const reducer = (state, action) => {
  console.log('action', action);
  switch (action.Type) {
    case actions.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
