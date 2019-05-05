import {
  GET_TODOLIST,
  ADD_TODO,
  SUCCESS_TODO,
  DELETE_TODO,
  SET_ITEMLOADING
} from "../actions/types";

const initialState = {
  todolist: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOLIST:
      return {
        ...state,
        todolist: [...action.payload],
        loading: false
      };

    case ADD_TODO:
      return {
        ...state,
        todolist: [action.payload, ...state.todolist]
      };

    case SUCCESS_TODO:
      return {
        ...state,
        todolist: state.todolist.map(item => {
          if (item.id === action.payload) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        })
      };

    case DELETE_TODO:
      return {
        ...state,
        todolist: state.todolist.filter(item => item.id !== action.payload)
      };

    case SET_ITEMLOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
