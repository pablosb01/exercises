const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const router = require('./routes/main.js')

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(express.json());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.use(router)



app.listen(PORT, () => console.log('server online'))