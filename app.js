const express= require('express');
const mysql= require('mysql');
const bcrypt= require('bcrypt');
const dotenv= require('dotenv');
const path= require('path');
const app =express();


//create connection to database
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs-login'
})

//connect to the database
db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("MySql connected...")
    }
})

//parse URL-encorded bodies(as sent by html forms)
app.use(express.urlencoded({extended: false}));

//Parse Json bodies (as sent by Api clients)
app.use(express.json());

app.set('view engine','hbs')
const publicDirectory= path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//Define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'))


app.listen(5000, ()=>{
    console.log('Server running on port 5000')
});