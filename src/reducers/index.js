import { combineReducers } from 'redux';
import photosById from './photosById';
import todos from './todos';

export const reducers = combineReducers({ photosById, todos });
