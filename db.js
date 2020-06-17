const mongoose = require('mongoose');


const FileScheme =  mongoose.Schema({


   data:[{

    symtoms: String,
    diseases: [{
        type: String
    }]
   }] 
  

    


});

const File = module.exports = mongoose.model('cvs',FileScheme);


module.exports.getAll = function (callback){
    File.find().exec( callback );
}
