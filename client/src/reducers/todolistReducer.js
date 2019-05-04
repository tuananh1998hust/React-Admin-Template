import { GET_TODOLIST, SET_ITEMLOADING } from "../actions/types";

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

    case SET_ITEMLOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
