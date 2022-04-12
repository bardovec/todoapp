import {
  ADD_TODO, DELETE_TODO, COMPLETE_TODO, DELETE_TODO_COMPLETE, TODO_DETAILS,
} from '../constants/actionTypes';

const initialState = {
  todos: [],
  isComplete: [],

};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TODO_DETAILS:
      return {...state, todoDetails: [ action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case DELETE_TODO_COMPLETE:
      return { ...state, isComplete: state.isComplete.filter((isComplete) => isComplete.id !== action.payload) };
    case COMPLETE_TODO:
      return { ...state, isComplete: [...state.isComplete, action.payload] };
    default:
      return state;
  }
};
