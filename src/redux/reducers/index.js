import { combineReducers } from "redux";
import userReducer from "./userReducer";
import incomeReducer from "./incomeReducer";
import expenseReducer from "./expenseReducer";

export default combineReducers({
  usersData: userReducer,
  userIncome: incomeReducer,
  userExpense: expenseReducer
});
