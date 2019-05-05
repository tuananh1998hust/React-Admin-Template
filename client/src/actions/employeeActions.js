import axios from "axios";
import { GET_EMPLOYEELIST, ADD_EMPLOYEE, DELETE_EMPLOYEE } from "./types";
import { setItemLoading } from "./types";

export const getEmployeeList = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/employeeList"
    )
    .then(res =>
      dispatch({
        type: GET_EMPLOYEELIST,
        payload: res.data
      })
    );
};

export const addEmployee = data => dispatch => {
  axios
    .post(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/employeeList",
      data
    )
    .then(res =>
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data
      })
    );
};

export const deleteEmployee = id => dispatch => {
  axios
    .delete(
      `https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/employeeList/${id}`
    )
    .then(res =>
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
      })
    );
};
