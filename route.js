"use strict"

const express = require('express');
const router = express.Router();
const File = require('./db');



router.get('/get',(req, res, next) => {

     
    File.getAll((err, result) =>{

        var count = result[0].data.length;

        // for(var i=0; i <count; i++){

            res.json(result[0]);

        // }

    })

})


module.exports = router;