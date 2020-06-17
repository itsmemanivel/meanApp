const express = require('express');
const app = express();
const router = require('router');
const port = process.env.PORT || 3000;
const uri = "mongodb://veluvijay:blogger1804@ds239903.mlab.com:39903/sample";
var path = require('path');
var mongoose = require('mongoose');
var Routes =  require('./route');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var cors = require('cors');


//db
mongoose.connect(uri,{useNewUrlParser:true,  useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
       console.log("connected to db"); 
});

//on error
mongoose.connection.on('error',(err)=>{
    console.log("Database error" +err);
});


 //cors
 var corsOption = {
    origin: true,
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
    exposeHeaders: ['x-auth-token']
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());



// static files
app.use(express.static(path.join(__dirname, 'public/dist/sample')));

app.get('/',(req, res, next)=>{

    res.sendFile(path.join(__dirname+'/index.html'))
})


//routes
app.use('/file',cors(), Routes);





//port
app.listen(port ,()=>{

    console.log(`🚀 Node server running on http://localhost/${port}`)
})















