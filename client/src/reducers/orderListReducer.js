import {
  GET_ORDERLIST,
  CHECK_ORDERLIST,
  DELETE_ORDERLIST,
  SET_ITEMLOADING
} from "../actions/types";

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

    case CHECK_ORDERLIST:
      return {
        ...state,
        orderList: state.orderList.map(item => {
          if (item.id === action.payload) {
            item.isDone = !item.isDone;
          }
          return item;
        })
      };

    case DELETE_ORDERLIST:
      return {
        ...state,
        orderList: state.orderList.filter(item => item.id !== action.payload)
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
