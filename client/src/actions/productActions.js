import axios from "axios";
import { GET_PRODUCTLIST } from "./types";
import { setItemLoading } from "./types";

export const getProductList = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/productList"
    )
    .then(res =>
      dispatch({
        type: GET_PRODUCTLIST,
        payload: res.data
      })
    );
};
