const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser=require('body-parser')

const indexRouter = require('./routes/index');
const greetingRouter = require('./routes/greeting');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/greeting', greetingRouter);

const dbConfig=require('./backend/config/database.config');
const mongoose=require('mongoose');
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("successfully connected to the database")
}).catch(error=>{
    console.log("could not connect to the database.exiting now...",error);
    process.exit();
})
module.exports = app;
