import { GET_CUSTOMERLIST } from "../actions/types";

const initialState = {
  customerList: [
    {
      id: 0,
      name: "Mr A",
      email: "a@gmail.com",
      phone: "0123456"
    },
    {
      id: 1,
      name: "Mr B",
      email: "b@gmail.com",
      phone: "0123456"
    },
    {
      id: 2,
      name: "Mr C",
      email: "c@gmail.com",
      phone: "0123456"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERLIST:
      return {
        ...state
      };

    default:
      return state;
  }
}
