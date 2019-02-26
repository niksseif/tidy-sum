const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

//= ===========================LOCAL HOST LINKS
// GETTING ALL USERS
// http://localhost:5000/users

// GETTING THE INCOME OF SPECIFIC USER
// http://localhost:5000/users/user:id/income

// GETTING ALL INCOMES
// http://localhost:5000/income

// GETTING ALL EXPENSES
// http://localhost:5000/expense
//= ================================================


const userRoutes = require('./src/routes/users');
const incomeRoute = require('./src/routes/income');
const expenseRoute = require('./src/routes/expense');


// user route
app.use('/users', userRoutes);

// income route
app.use('/income', incomeRoute);

// expense route
app.use('/expense', expenseRoute);


// app.all('*', (req, res, next) => res.sendStatus(404));

// app.use((err, req, res, next) => {
//   res.status(err.status).json(err);
// });


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));


  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
