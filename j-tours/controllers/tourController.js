
const Tour = require('./../models/tourModel')
// const fs = require('fs') - file system me lexu file

// e kem lexu filen i cili i permban te gjitha tours
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))



// exports.checkId = (req, res, next , val)=> {
//     console.log(`Tour id: ${val}`)

//     15 > 12  

//     if(req.params.id*1 > tours.length) {
//         return res.json ({
//             status: "fail",
//             message: "invalid ID"

//         })

//     }
//     next() duhesh me  thir patjeter n mniddleware 
// }

// exports.checkBody = (req, res, next ) => {

//! - nuk

//     if(!req.body.name || !req.body.price ){
//         return res.json({
//             stataus: "fail",
//             message: "Missing name or price"
//         })
//     }



//     next()
// }




exports.getAllTours = (req, res) => {
    console.log(req.requestTime)

    res.json({
        status: "success",
        // requested :req.requestTime,
        // data: { tours }
    })
}

exports.createTour = async (req, res) => {

    //Opsioni 1
    // const newTour = new Tour ({})
    // newTour.save()
     
    try{
        const newTour = await Tour.create(req.body)
        res.json({
            status: "success" ,
            data: {
                tour:newTour
            }
        })
    }

    catch (err) {
        res.json({
            status: "fail" , 
            message : err
        })
    }

}

exports.getTour = (req, res) => {
    console.log(req.params)

    // po e marrim id-n dhe po e konvertojm ne string
    // const id = req.params.id * 1
    // const tour = tours.find(el => el.id === id)

 

    // res.json({
    //     status: "success",
    //     data: {
    //         tour
    //     }
    // })

}

exports.updateTour = (req, res) => {

    

    res.json({
        status: "success",
        data: {
            tour: "Updated tour"
        }
    })

}



exports.deleteTour = (req, res) => {



    res.json({
        status: "succsess",
        data: null
    })
}


