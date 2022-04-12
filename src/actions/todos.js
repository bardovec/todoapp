import {
  ADD_TODO, DELETE_TODO, DELETE_TODO_COMPLETE, COMPLETE_TODO, TODO_DETAILS,
} from '../constants/actionTypes';

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
export const completeTodo = (data) => ({
  type: COMPLETE_TODO,
  payload: data,
});
export const deleteCompleteTodo = (id) => ({
  type: DELETE_TODO_COMPLETE,
  payload: id,
});
export const todoDetails = (name) => ({
  type: TODO_DETAILS,
  payload: name,
});
