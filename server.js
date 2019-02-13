const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 5000;


//============================LOCAL HOST LINKS
//GETTING ALL USERS
// http://localhost:5000/users

//GETTING THE INCOME OF SPECIFIC USER
//http://localhost:5000/users/income/1

//GETTING ALL INCOMES
// http://localhost:5000/income
//=================================================



if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


const userRoutes = require('./src/routes/users')
const incomeRoute = require('./src/routes/income')

//user route
app.use('/users',userRoutes)
app.use('/users/income',userRoutes)
//income route
app.use('/income',incomeRoute)


app.all('*', (req, res, next) => res.sendStatus(404))

app.use((err, req, res, next) => {
    res.status(err.status).json(err)
})
app.listen(port, () => console.log(`Listening on port ${port}`));