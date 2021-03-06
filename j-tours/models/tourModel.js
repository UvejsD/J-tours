const mongoose = require('mongoose')

//krijimi i modelit 

//skema

const tourSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true,
        trim: true 
    },

    duration: {
        type: Number,
        required: [true, "A tour must have a duration"],
    },

    maxGroupSize: {
        type: Number,
        required: [true, "A tour must have a Group Size"],
    },

    difficulty: {
        type: String,
        required: [true, "A tour must have a difficulty"],
    },

    rateingsAverage: {
        type: Number,
        default: 4.5
    },

    ratingQuantity: {
        type: Number,
        default: 0
    },


    price: {
        type: Number,
        required: [true, "A tour must have a price"],
    }, 

    priceDiscount: Number,

    summary: {
        type: String,
        required: [true, "A tour must have a description"],
        trim: true 
    }, 

    description: {
        type: String,
        trim: true 
    }, 

    imageCover: {
        type: String,
        required: [true, "A tour must have a cover image"],
    },

    images: [String],

    createdAt: {
        type: Date,
        default: Date.now()
    },

    startDates: [Date],

    







})

//tabela 
const Tour = mongoose.model("Tour" , tourSchema)

module.exports = Tour   
