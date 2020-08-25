import { SET_CURRENT_USER, CHANGE_LOGGED_IN_STATUS } from '../actions/index';

const initialState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
};

const musicianReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log('payl', action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case CHANGE_LOGGED_IN_STATUS:
      return {
        ...state,
        loggedInStatus: action.payload,
      };
    default:
      return state;
  }
};

export default musicianReducer;
