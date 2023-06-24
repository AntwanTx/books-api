//Dependencies
const express = require('express')
const mongoose = require('mongoose')



const cors = require('cors')


 
//Configuration 
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log('connected to mongoDB: ', process.env.MONGO_URI)
    })

//Middleware
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/', (req, res) => {
    res.send('Books are the best!')
   })

//Books
const booksController = require('./controller/books_controller')
app.use('/books', booksController) 

//Listen
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })