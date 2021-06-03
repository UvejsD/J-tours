const mongoose = require('mongoose')

//krijimi i modelit 

//skema

const tourSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true
    },

    rating: {
        type: Number,
        default: 4.0
    },

    price: {
        type: Number,
        required: [true, "A tour must have a price"],
    }, 

})

//tabela 
const Tour = mongoose.model("Tour" , tourSchema)

module.exports = Tour   