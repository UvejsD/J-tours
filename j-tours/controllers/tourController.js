
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




exports.getAllTours = async (req, res) => {
    

    try{

        const tours = await Tour.find()


        res.json({
        status: "success",
        result: tours.length ,  //tregon sa tours jan
        data: { tours }

        // requested :req.requestTime,
       
    })
     }

    catch (err) {
        res.json({
            status: "fail" , 
            message : err
        })
     }

 
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

exports.getTour = async (req, res) => {
    console.log(req.params)
    try {
        const tour = await Tour.findById(req.params.id)

    res.json({
        status: "success",
        data: 
            {tour}
        })
        
    }

    catch (err) {
        res.json({
            status: "fail" , 
            message : err
        })
    }





    // po e marrim id-n dhe po e konvertojm ne string
    // const id = req.params.id * 1
    // const tour = tours.find(el => el.id === id)

 

 

}

exports.updateTour = async (req, res) => {

    try{

        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })   
        res.json({
            status: "success",
            data: {
                tour
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



exports.deleteTour = async (req, res) => {

    try{
         await Tour.findByIdAndDelete(req.params.id)
          
   
        res.json({
            status: "succsess",
            data: null
    })
  
    }

    catch (err) {
        res.json({
            status: "fail" , 
            message : err
        })
    }


  
}


