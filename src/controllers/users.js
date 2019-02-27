const model = require('../models/users');


const getAllUsers = async (req, res) => {
  // TODO: ADD AUTH HERE
  try {
    const promise = await model.getAllUsers();
    res.status(200).json(promise);
  } catch (error) {
    console.error('you have no permission');
  }
};
// get user income
const getUserIncome = async (req, res) => {
//   try {
  const payload = req.params;

  const promise = await model.getUserIncomes(payload.userid);
  console.log(promise, '<<<<<<promise from user controler');
  res.status(200).json(promise);
//   }
//   catch (error) {
//     console.error('you have no permission');
//   }
};

// update user income
const updateUserIncome = async (req, res) => {
  const id = req.body.id;
  const payload = req.body;
  const promise = model.updateUserIncome(id, payload);
  promise.then((result) => {
    res.status(201).json(result);
  });
  promise.catch(error => error);
};


// ------- ----- CREATE INCOME
const createUserIncome = async (req, res) => {
  try {
    const payload = await req.body;
    const promise = await model.createUserIncome(payload);

    return res.status(200).json(promise);
  } catch (error) {
    console.error('error creating Userincome', error);
  }
};
//= ===========  DELETE INCOME
const deleteUserIncome = async (req, res) => {
  try {
    const id = await req.params.incomeid;

    const promise = await model.deleteUserIncome(id);

    return res.status(200).json(promise);
  } catch (error) {
    console.error('error creating income', error);
  }
};

// GET USER EXPENSE______

const getUserExpense = async (req, res) => {
  try {
    const payload = req.params;

    const promise = await model.getUserExpense(payload.userid);
    // console.log(promise,"<<<promise")
    res.status(200).json(promise);
  } catch (error) {
    console.error('you have no permission');
  }
};
// /======================= CREATE EXPENSE

const createUserExpense = async (req, res) => {
  try {
    const payload = await req.body;
    const promise = await model.createUserExpense(payload);

    return res.status(200).json(promise);
  } catch (error) {
    console.error('error creating expense');
  }
};

// ____________________EDIT USER EXPENSE
const editUserExpense = async (req, res) => {
  const id = req.body.id;
  const payload = req.body;
  const promise = model.editUserExpense(id, payload);

  promise.then((result) => {
    res.status(201).json(result);
  });
  promise.catch(error => error);
};
//= ===========  DELETE EXPENSE
const deleteUserExpense = async (req, res) => {
  try {
    const id = await req.params.expenseid;

    const promise = await model.deleteUserExpense(id);

    return res.status(200).json(promise);
  } catch (error) {
    console.error('error creating income', error);
  }
};
module.exports = {
  getAllUsers,
  getUserIncome,
  updateUserIncome,
  createUserIncome,
  deleteUserIncome,
  getUserExpense,
  createUserExpense,
  editUserExpense,
  deleteUserExpense,
};
