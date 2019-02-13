const incomeQuery = require('../../queries/income')




//=============Get all the users ======
const getUserAllIncome = async() => {
   incomes =  await incomeQuery.getAllIncomes()
   return incomes;  
}
//========== CREATE INCOME
const createIncome = async (payload) => {
    income = await incomeQuery.createIncome(payload)
    return income.error ? { error: 'error creating income', status: 404 } : income
}


//=========== DELETE INCOME 
const deleteIncome = async (id) => {
    income = await incomeQuery.deleteIncome(id)
        (!income) ? { error: 'error deleting income', status: 404 } : income;
}


module.exports = { getUserIncomes, createIncome,deleteIncome }