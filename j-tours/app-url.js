const express = require('express')
const fs = require('fs')



const app = express()
 

//1) MIDDELWARE
//middelware - rrin mes req, res
app.use(express.json())



app.get("/", (req, res) => {
    res.json({
        message: "Hello from server side",
        app: "jTours"
    })
})


app.post("/", (req, res) => {
    res.send("You can post to this URL")
})


const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)) 



app.get('/api/v1/tours', (req, res)=>{
    res.json({
        status: "Success" , 
        data: {tours}
    })
})

app.get('/api/v1/tours/:id ', (req, res)=>{

    console.log(req.params)
    

    //po e marrim id dhe po e konvertojm ne string
    const id = req.params.id *1
    
    const tour = tours.find(el => el.id === id)

    if(!tour){
        return res.json({
            status : "fail",
            message: "Invalid ID"
        })
    }

    res.json({
        status: "success",
        data: {
            tour
        }
    })
     
})

app.post( '/api/v1/tours' , (req, res)=>{
    //console.log(req.body) 

    // Ka me u shtu nje dokument t ri 
    const newId = tours[tours.length -1 ].id +1 
    const newTour = Object.assign({id: newId }, req.body)
    
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify( tours), err => {
        res.json({
            status : "success" , 
            data : {
                tour: newTour
            }
        })
    })
})



app.patch('/api/v1/tours/:id ', (req, res)=>{
    //po e marrim id -
    const id = req.params.id *1
    if(id > tours.length) {
        return res.json ({
                status : "fail",
                message: "Invalid ID"

        })
    }


    res.json({
        status: "success",
        data:{
            tour: "Uptaded tour"
        }
    })

})



app.delete('/api/v1/tours/:id ', (req,res)=>{
    const id = req.params.id *1
    if(id > tours.length) {
        return res.json ({
                status : "fail",
                message: "Invalid ID"

        })
    }

    res.json({
        status: " success",
        data: null

    })
})



app.listen(3000, () => {
    console.log("Server is listening")
})

