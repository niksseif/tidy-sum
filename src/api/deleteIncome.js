
const URL = 'https://tidy-sum-backend.herokuapp.com';
const deleteIncome = (id, userId) => {
  const res = fetch(`${URL}/users/${userId}/income/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },

  }).then((data) => {
    data.json().then(json => json);
  });
};
export default deleteIncome;
