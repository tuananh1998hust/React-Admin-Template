import { GET_TODOLIST } from "../actions/types";

const initialState = {
  todolist: [
    { id: 0, title: "Work 1", isCompleted: true },
    { id: 1, title: "Work 2", isCompleted: false },
    { id: 2, title: "Work 3", isCompleted: false }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOLIST:
      return {
        ...state
      };

    default:
      return state;
  }
}
