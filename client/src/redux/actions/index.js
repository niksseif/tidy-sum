import { FETCH_USER_DATA } from './types'
import {FETCH_USER_INCOME, FETCH_USER_INFO} from './types'

const URL = 'http://localhost:5000'
    //http://localhost:5000/users/${id}/income

export const fetchUserData = () => async (dispatch) => {
   try{ 
       let res = await fetch(`${URL}/users`);
        let usersData = await res.json()
        dispatch({ type: FETCH_USER_DATA, payload: usersData}); 
        const userId = usersData[0].id
        dispatch({type: FETCH_USER_INFO, payload : userId })
    } catch(err){
        throw err;
    }
}

export const fetchUserIncome  = (id) => async (dispatch) =>{
    try {
        let res = await fetch(`${URL}/users/${id}/income`)
        let userIncome = await res.json();
        dispatch({ type: FETCH_USER_INCOME, payload: userIncome})
    } catch (err) {
        throw err;
    }
}