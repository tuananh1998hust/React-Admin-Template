import axios from "axios";
import { GET_ORDERLIST } from "./types";
import { setItemLoading } from "./types";

export const getOrderList = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/orderList"
    )
    .then(res =>
      dispatch({
        type: GET_ORDERLIST,
        payload: res.data
      })
    );
};
