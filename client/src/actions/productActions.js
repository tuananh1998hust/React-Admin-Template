import axios from "axios";
import { GET_PRODUCTLIST, ADD_PRODUCT, SET_CURRENT_PRODUCT } from "./types";
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

export const addProduct = data => dispatch => {
  axios
    .post(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/productList",
      data
    )
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    );
};

export const setCurrentProduct = (data, id) => dispatch => {
  axios
    .patch(
      `https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/productList/${id}`,
      data
    )
    .then(res =>
      dispatch({
        type: SET_CURRENT_PRODUCT,
        payload: res.data
      })
    );
};
