import { GET_CUSTOMERLIST, SET_ITEMLOADING } from "../actions/types";

const initialState = {
  customerList: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERLIST:
      return {
        ...state,
        customerList: [...action.payload],
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
