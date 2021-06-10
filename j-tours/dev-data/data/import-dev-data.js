
const fs = require('fs')
// mongoose na jep mundesi te lidhemi me database , 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Tour = require('./../../models/tourModel')


dotenv.config({path: "./config.env"})



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


//Read json

const tours = JSON.parse ( fs.readFileSync(`${__dirname}/tours-simple.json` , "utf-8") )

// import data into db


const  importData = async () => {
    try{
        await Tour.create(tours)
        console.log('Data added')
    }


    catch(err){
    console.log(err)
    }
} 


// delete old data - deleteMany me fshi krejt
//                 -deleteOne me fshi nio
const deleteData = async () => {
    try{
        await Tour.deleteMany()
        console.log('Data deleted')
    }


    catch(err){
    console.log(err)
    }
} 


if(process.argv[2] === "--import") {
    importData()
}

else if (process.argv[2] === "--delete") {
    deleteData()
}


console.log(process.argv) // argv    --import & --delete



