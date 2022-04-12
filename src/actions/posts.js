import { FETCH_BY_ID } from '../constants/actionTypes';
import * as api from '../api';

export const fetchById = (number) => async (dispatch) => {
  try {
    const data = await api.fetchPhoto(number);
    dispatch({ type: FETCH_BY_ID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
