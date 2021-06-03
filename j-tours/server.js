// mongoose na jep mundesi te lidhemi me database , 
const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config({path: "./config.env"})

const app  = require('./app')

// te envoirement gjendet nje database "te condig.env" e cila eshte database
const DB = process.env.DATABASE.replace(
    '<password>' , process.env.DATABASE_PASSWORD
)


//connection - lidhja me database
//DB eshte database jote me emertimin me lart const
//kurse ky objekt eshte si default te cdo connection
mongoose.connect(DB, {
    useNewUrlParser : true, 
    useCreateIndex : true, 
    useFindAndModify : false,
    useUnifiedTopology : true
     
}).then(()=> console.log('DB connection succesful'))




//krijimi i modelit 

//skema

const tourSchema = new mongoose.Schema({

    name : {
        type: String,
        required: [true, "A tour must have a name"],
        unique: true
    },

    rating : {
        type: Number,
        default: 4.0
    },

    price : {
        type: Number,
        required: [true, "A tour must have a name"],
    }, 

})

//tabela 
const Tour = mongoose.model("Tour" , tourSchema)


// e mushim tabelen 

const testTour = new Tour ({
    name: "Paris",
    rating: 4.3,
    price: 333     
})


testTour.save().then(doc => {
    console.log(doc)
}).catch(err=>{
    console.log('Error')
})

//funksioni catch kap-errora



app.listen(3000, () => {
    console.log("Server is listeing")
})