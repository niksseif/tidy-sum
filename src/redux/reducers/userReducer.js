import {
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILED,
  ADD_USER_DATA,
} from '../actions/types';

const defaultInitialStateUserReducer = [];

const userReducer = (state = defaultInitialStateUserReducer, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return { ...state, user: action.payload };
    case FETCH_USER_DATA_SUCCESS:
      return [...action.payload];
    case FETCH_USER_DATA_FAILED:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
