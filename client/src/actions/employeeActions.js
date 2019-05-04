import axios from "axios";
import { GET_EMPLOYEELIST } from "./types";
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
