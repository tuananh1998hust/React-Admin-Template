import { GET_PRODUCTLIST, SET_ITEMLOADING } from "../actions/types";

const initialState = {
  productList: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTLIST:
      return {
        ...state,
        productList: [...action.payload],
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
