export const GET_ORDERLIST = "GET_ORDERLIST";
export const GET_CUSTOMERLIST = "GET_CUSTOMERLIST";
export const GET_EMPLOYEELIST = "GET_EMPLOYEELIST";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const GET_PRODUCTLIST = "GET_PRODUCTLIST";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
export const GET_TODOLIST = "GET_TODOLIST";
export const SET_ITEMLOADING = "SET_ITEMLOADING";

export const setItemLoading = () => {
  return {
    type: SET_ITEMLOADING
  };
};
