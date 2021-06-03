const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()


// 1) MIDDELWARE
// middelware - n'mes - req, res

console.log(process.env.NODE_ENV)


if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
} 



app.use(express.json())

app.use(express.static(`${__dirname}/public`))



app.use((req, res, next)=> {
    console.log("Hello from MIDDELWARE")
    next()
})

app.use((req, res , next)=>{
    req.requestTime = new Date().toISOString()
    next()
})




// 2) ROUTE HANDLERS


// 3) ROUTE


// app.patch('/api/v1/tours/:id', (req, res) => {

//     const id = req.params.id
//     if (id > tours.length) {
//         return res.json({
//             status: "fail",
//             messages: "Invalid ID"
//         })
//     }

//     res.json({
//         status: "success",
//         data: {
//             tour: "Updated tour"
//         }
//     })

// })

// app.delete('/api/v1/tours/:id', (req, res) => {

//     const id = req.params.id
//     if (id > tours.length) {
//         return res.json({
//             status: "fail",
//             messages: "Invalid ID"
//         })
//     }

//     res.json({
//         status: "succsess",
//         data: null
//     })
// })

app.use ('/api/v1/tours', tourRouter)
app.use ('/api/v1/users', userRouter)


module.exports = app