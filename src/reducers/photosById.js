import { FETCH_BY_ID } from '../constants/actionTypes';

export default (state = { photos: null }, action) => {
  switch (action.type) {
    case FETCH_BY_ID:
      return action.payload;
    default:
      return state;
  }
};
