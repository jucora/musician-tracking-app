import {
  SET_CURRENT_USER,
  CHANGE_LOGGED_IN_STATUS,
  SET_TOKEN,
} from '../actions/index';

const initialState = {
  loggedInStatus: 'NOT_LOGGED_IN',
  user: {},
  token: null,
};

const musicianReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CHANGE_LOGGED_IN_STATUS:
      return {
        ...state,
        loggedInStatus: action.payload,
      };
    case SET_TOKEN:
      console.log('token', action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default musicianReducer;
