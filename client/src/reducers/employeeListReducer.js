import { GET_EMPLOYEELIST } from "../actions/types";

const initialState = {
  employeeList: [
    {
      id: 0,
      name: "Nguyen Tuan Anh",
      email: "tuananh1998.hust@gmail.com",
      phone: "0349081709",
      address: "Dan Phuong Hanoi",
      gender: "Male",
      position: "IT Leader"
    },
    {
      id: 1,
      name: "Nguyen Tuan Anh",
      email: "tuananh1998.hust@gmail.com",
      phone: "0349081709",
      address: "Dan Phuong Hanoi",
      gender: "Male",
      position: "Lab Leader"
    },
    {
      id: 2,
      name: "Nguyen Tuan Anh",
      email: "tuananh1998.hust@gmail.com",
      phone: "0349081709",
      address: "Dan Phuong Hanoi",
      gender: "Male",
      position: "manager"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEELIST:
      return {
        ...state
      };

    default:
      return state;
  }
}
