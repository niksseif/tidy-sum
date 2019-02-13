const incomeQuery = require('../../queries/income')




//=============Get all the users ======
const getUserAllIncome = async() => {
   incomes =  await incomeQuery.getAllIncomes()
   return incomes;  
}


module.exports = { getUserAllIncome,getUserIncomes }