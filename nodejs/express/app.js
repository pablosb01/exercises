const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send(JSON.stringify(planets))
})

app.listen(PORT, () => console.log('server online'))

app.use(express.json());
app.use(morgan('combined'));

let planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];
