import { FETCH_USER_DATA } from './types'

const URL = 'http://localhost:5000'


export const fetchUserData = async (dispatch) => {
    let res = await fetch(`${URL}/users`);
    dispatch({ type: FETCH_USER_DATA, payload: res}); 
}