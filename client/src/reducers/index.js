import { combineReducers } from "redux";
import orderListReducer from "./orderListReducer";
import customerListReducer from "./customerListReducer";
import productListReducer from "./productListReducer";
import employeeListReducer from "./employeeListReducer";
import todolistReducer from "./todolistReducer";

export default combineReducers({
  orderList: orderListReducer,
  customerList: customerListReducer,
  productList: productListReducer,
  employeeList: employeeListReducer,
  todolist: todolistReducer
});
