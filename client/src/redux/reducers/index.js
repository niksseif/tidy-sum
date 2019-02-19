import { combineReducers } from 'redux';
import userReducer from './userReducer';
import incomeReducer from './incomeReducer';



export default  combineReducers({

    usersData: userReducer,
    userIncome: incomeReducer,
})