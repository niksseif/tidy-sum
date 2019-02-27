import { ADD_USER_INCOME, ADD_USER_INCOME_FAILED, FETCH_USER_EXPENSE, ADD_USER_EXPENSE, ADD_USER_EXPENSE_FAILED, EDIT_USER_EXPENSE, DELETE_USER_EXPENSE } from './types';
import { FETCH_USER_INCOME, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILED, DELETE_USER_INCOME, EDIT_USER_INCOME } from './types';


const URL = 'https://tidy-sum-backend.herokuapp.com';
// http://localhost:5000/users/${id}/income

// Add post request to the user income module


export const fetchUserData = () => async (dispatch) => {
  try {
    const res = await fetch(`${URL}/users`);
    const usersData = await res.json();
    dispatch({
      type: FETCH_USER_DATA_SUCCESS,
      payload: usersData,
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_DATA_FAILED,
      payload: err,
    });
  }
};


export const fetchUserIncome = id => async (dispatch) => {
  try {
    const res = await fetch(`${URL}/users/${id}/income`);
    const userIncome = await res.json();

    dispatch({ type: FETCH_USER_INCOME, payload: userIncome });
  } catch (err) {
    throw err;
  }
};


// ADD USER INCOME
export const handleAdd = data => async (dispatch) => {
  try {
    const res = await fetch(`${URL}/users/${data.users_id}/income`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    dispatch({
      type: ADD_USER_INCOME,
      payload: result,
    });
  } catch (err) {
    dispatch({
      type: ADD_USER_INCOME_FAILED,
      payload: err,
    });
  }
};

// _______UPDATE USER INCOME______

export const handleUpdate = (id, data) => async (dispatch) => {
  const res = fetch(`${URL}/users/${id}/income`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => {
    data.json()
      .then((json) => {
        dispatch({ type: EDIT_USER_INCOME, payload: json });
      });
  });
};
// ______________DELETE USER INCOME
export const handleDeleteReq = (id, userId) => async (dispatch) => {
  fetch(`${URL}/users/${userId}/income/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },

  }).then((data) => {
    data.json().then((json) => {
      dispatch({ type: DELETE_USER_INCOME, payload: json });
    });
  });
};

// ------------------FETCH EXPENSE
export const fetchUserExpense = id => async (dispatch) => {
  try {
    const res = await fetch(`${URL}/users/${id}/expense`);
    const userExpense = await res.json();

    dispatch({ type: FETCH_USER_EXPENSE, payload: userExpense });
  } catch (err) {
    throw err;
  }
};

// -------CREATE USER EXPENSE

export const handleAddExpense = data => async (dispatch) => {
  try {
    const res = await fetch(`${URL}/users/${data.users_id}/expense`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    dispatch({
      type: ADD_USER_EXPENSE,
      payload: result,
    });
  } catch (err) {
    dispatch({
      type: ADD_USER_EXPENSE_FAILED,
      payload: err,
    });
  }
};
// _______EDIT USER EXPENSE______

export const editUserExpense = (id, data) => async (dispatch) => {
  const res = fetch(`${URL}/users/${id}/expense`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => {
    data.json()

      .then((json) => {
        dispatch({ type: EDIT_USER_EXPENSE, payload: json });
      });
  });
};

// --------------------DELETE USER EXPENSE--------------
export const deleteUserExpense = (id, userId) => async (dispatch) => {
  fetch(`${URL}/users/${userId}/expense/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },

  }).then((data) => {
    data.json().then((json) => {
      dispatch({ type: DELETE_USER_EXPENSE, payload: json });
    });
  });
};
