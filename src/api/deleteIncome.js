
const URL = 'http://localhost:5000';
const deleteIncome = (id, userId) => {
  const res = fetch(`/users/${userId}/income/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },

  }).then((data) => {
    data.json().then(json => json);
  });
};
export default deleteIncome;
