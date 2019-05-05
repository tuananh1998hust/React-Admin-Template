import {
  GET_PRODUCTLIST,
  ADD_PRODUCT,
  SET_CURRENT_PRODUCT,
  SET_ITEMLOADING
} from "../actions/types";

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

    case ADD_PRODUCT:
      return {
        ...state,
        productList: [...state.productList, action.payload]
      };

    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        productList: state.productList.map(item => {
          if (item.id === action.payload.id) {
            item.count = action.payload.count;
          }
          return item;
        })
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
