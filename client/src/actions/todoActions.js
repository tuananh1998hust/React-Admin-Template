import axios from "axios";
import { GET_TODOLIST, ADD_TODO, SUCCESS_TODO, DELETE_TODO } from "./types";
import { setItemLoading } from "./types";

export const getTodolist = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/todolist"
    )
    .then(res =>
      dispatch({
        type: GET_TODOLIST,
        payload: res.data
      })
    );
};

export const addTodo = data => dispatch => {
  axios
    .post(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/todolist",
      data
    )
    .then(res =>
      dispatch({
        type: ADD_TODO,
        payload: res.data
      })
    );
};

export const successClick = id => dispatch => {
  axios
    .post(
      "https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/todolist"
    )
    .then(res =>
      dispatch({
        type: SUCCESS_TODO,
        payload: id
      })
    );
};

export const deleteClick = id => dispatch => {
  axios
    .delete(
      `https://my-json-server.typicode.com/tuananh1998hust/React-Admin-Template/todolist/${id}`
    )
    .then(res =>
      dispatch({
        type: DELETE_TODO,
        payload: id
      })
    );
};
