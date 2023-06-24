const mongoose = require('mongoose')
const { Schema } = mongoose

//Schema
const booksSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String

    })

 //model & export
    const Book = mongoose.model('Book', booksSchema)
    module.exports = Book