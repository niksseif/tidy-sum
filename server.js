const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 5000;


if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


const userRoutes = require('./src/routes/users')

//====this is the rout for the user
app.use('/api/users',userRoutes)





app.use((err, req, res, next) => {
    res.status(err.status).json(err)
})
app.listen(port, () => console.log(`Listening on port ${port}`));