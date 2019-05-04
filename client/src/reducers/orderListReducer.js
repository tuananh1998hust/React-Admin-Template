import { GET_ORDERLIST, SET_ITEMLOADING } from "../actions/types";

const initialState = {
  orderList: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERLIST:
      return {
        ...state,
        orderList: [...action.payload],
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
