import axios from "axios";
import { GET_ORDERLIST, CHECK_ORDERLIST, DELETE_ORDERLIST } from "./types";
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

export const checkList = id => dispatch => {
  axios
    .post(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/orderList"
    )
    .then(res =>
      dispatch({
        type: CHECK_ORDERLIST,
        payload: id
      })
    );
};

export const deleteClick = id => dispatch => {
  axios
    .delete(
      `https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/orderList/${id}`
    )
    .then(res =>
      dispatch({
        type: DELETE_ORDERLIST,
        payload: id
      })
    );
};
