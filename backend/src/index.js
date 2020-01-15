const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/week10', {
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true
    }
)

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)