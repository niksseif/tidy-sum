import { ADD_USER_DATA , ADD_USER_INCOME, ADD_USER_INCOME_SUCCESS, ADD_USER_INCOME_FAILED } from './types'
import { FETCH_USER_INCOME, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILED, DELETE_USER_INCOME, EDIT_USER_INCOME} from './types'
import deleteIncome from '../../api/deleteIncome'



const URL = 'http://localhost:5000'
    //http://localhost:5000/users/${id}/income

//Add post request to the user income module


export const fetchUserData = () => async (dispatch) => {
   try{ 
       let res = await fetch(`${URL}/users`);
        let usersData = await res.json()
        dispatch({ 
            type: FETCH_USER_DATA_SUCCESS, 
            payload: usersData
        });  
        console.log(res,"<<<Res from user fetch")
   } catch (err) {
       dispatch({
           type: FETCH_USER_DATA_FAILED,
           payload: err,
       })
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

//handling delete request after fetching api in the api forlder
export const handleDeleteReq =(id,userId) => async (dispatch) => {   
    
    const res = fetch(`http://localhost:5000/users/${userId}/income/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },

    }).then((data) => {
        console.log(data, "<<< returned data from api")
        data.json().then(json => {
            dispatch({ type: DELETE_USER_INCOME, payload: json})
        })
    })

}


//ADD USER INCOME
export const handleAdd =  (data) => async (dispatch) =>  {

    try {
        const res = await fetch(`http://localhost:5000/users/${data.users_id}/income`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    let result = await res.json()
    dispatch({
        type: ADD_USER_INCOME, 
        payload : result
    })
    } catch (err) {
        dispatch({
        type: ADD_USER_INCOME_FAILED,
        payload:err,
        })
    }
}

// _______UPDATE USER INCOME______

export const handleUpdate =  (id, data) => async dispatch =>{
   
        let res = fetch(`http://localhost:5000/users/${id}/income`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((data) => {
            console.log(data, "DATA FROM API")
            data.json()
            .then(json => {
                console.log(json,"<<<<<json object")
                dispatch({ type: EDIT_USER_INCOME, payload: json })
            })
        })
   
}


// const res = await fetch(`http://localhost:5000/users/${userId}/income`, {
//     method: 'PUT',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data.income)
// })
// await res;
// console.log(res, "<<<res")
// res.status ? alert('done') : alert('service is not working')