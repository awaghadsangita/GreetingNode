const express = require('express');
const bodyParser=require('body-parser')

const indexRouter = require('./routes/index');
const greetingRouter = require('./routes/greeting');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/greeting', greetingRouter);

const dbConfig=require('./backend/config/database.config');
const mongoose=require('mongoose');
mongoose.set('useFindAndModify',false)
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("successfully connected to the database")
}).catch(error=>{
    console.log("could not connect to the database.exiting now...",error);
    process.exit();
})
module.exports = app;
