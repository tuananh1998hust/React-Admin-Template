import uuid from "uuid";
import {
  GET_EMPLOYEELIST,
  DELETE_EMPLOYEE,
  ADD_EMPLOYEE,
  SET_ITEMLOADING
} from "../actions/types";

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

    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeList: [...state.employeeList, { id: uuid(), ...action.payload }]
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        employeeList: state.employeeList.filter(
          item => item.id !== action.payload
        )
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
