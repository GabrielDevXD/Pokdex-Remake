const express = require ('express')
const port = 3000;
const app = express()
const cors = require('cors')

app.use(express.json());