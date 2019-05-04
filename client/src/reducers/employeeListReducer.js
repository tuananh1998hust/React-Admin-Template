import { GET_EMPLOYEELIST, SET_ITEMLOADING } from "../actions/types";

const initialState = {
  employeeList: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEELIST:
      return {
        ...state,
        employeeList: [...action.payload],
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
