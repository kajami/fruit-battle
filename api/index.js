const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const API_BASE_URL = process.env.API_BASE_URL
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json());
app.use(cors())
app.use(express.static('build'))

app.get('/api', (request, response) => {
    axios.get(API_BASE_URL)
    .then(apiResponse => {
       const fruits = apiResponse.data
       response.json(fruits)
    })
    .catch((error) => console.log(error));    
  })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))