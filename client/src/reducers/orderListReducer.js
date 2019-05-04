import { GET_ORDERLIST } from "../actions/types";

const initialState = {
  orderList: [
    {
      id: 0,
      nameProduct: "CNC 3 truc",
      imgUrl: "http://lorempixel.com/240/120/",
      nameCustomer: "Mr. A",
      emailCustomer: "a@gmail.com",
      phone: "0123456",
      isDone: true
    },
    {
      id: 1,
      nameProduct: "CNC 4 truc",
      imgUrl: "http://lorempixel.com/240/120/",
      nameCustomer: "Mr. B",
      emailCustomer: "b@gmail.com",
      phone: "0123456",
      isDone: false
    },
    {
      id: 2,
      nameProduct: "CNC 5 truc",
      imgUrl: "http://lorempixel.com/240/120/",
      nameCustomer: "Mr. C",
      emailCustomer: "c@gmail.com",
      phone: "0123456",
      isDone: false
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERLIST:
      return {
        ...state
      };

    default:
      return state;
  }
}
