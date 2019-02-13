const expenseQuery = require('../../queries/expense')




//=============Get all the users ======
const getUserExpense= async () => {
    expenses = await expenseQuery.getAllExpenses()
    return expenses;
}
module.exports = { getUserExpense};