import { GET_PRODUCTLIST } from "../actions/types";

const initialState = {
  productList: [
    {
      id: 0,
      name: "CNC",
      imgUrl: "http://lorempixel.com/240/120/",
      price: 100,
      desc: "Lorem pixel is dumply text",
      count: 100
    },
    {
      id: 1,
      name: "CNC",
      imgUrl: "http://lorempixel.com/240/120/",
      price: 100,
      desc: "Lorem pixel is dumply text",
      count: 100
    },
    {
      id: 2,
      name: "CNC",
      imgUrl: "http://lorempixel.com/240/120/",
      price: 100,
      desc: "Lorem pixel is dumply text",
      count: 100
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTLIST:
      return {
        ...state
      };

    default:
      return state;
  }
}
