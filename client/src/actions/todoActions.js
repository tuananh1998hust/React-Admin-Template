import axios from "axios";
import { GET_TODOLIST } from "./types";
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
