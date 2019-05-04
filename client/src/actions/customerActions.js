import axios from "axios";
import { GET_CUSTOMERLIST } from "./types";
import { setItemLoading } from "./types";

export const getCustomerList = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/customerList"
    )
    .then(res =>
      dispatch({
        type: GET_CUSTOMERLIST,
        payload: res.data
      })
    );
};
