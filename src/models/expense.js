const expenseQuery = require('../../queries/expense')




//=============Get all the expens ======
const getUserExpense= async () => {
    expenses = await expenseQuery.getAllExpenses()
    return expenses;
}

//==========CREATE EXPENSE
const createExpense = async (payload) => {
    expense = await expenseQuery.createExpense(payload)
    return expense.error ? {error: 'error creating expense', status: 404 } : expense
}

//===============DELETE EXPENSE
const deleteExpense = async (id) =>{
    expense = await expenseQuery.deleteExpense(id)
    (!expense) ? {error: 'error deleting expense', status : 404} : expense;
}
module.exports = { getUserExpense, createExpense, deleteExpense};