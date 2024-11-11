//database connection

const mysql= require('mysql');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs-login'
})

exports.register= async(req,res)=>{
    console.log(req.body);

    // const name=req.body.name;
    // const email=req.body.email;
    // const password=req.body.password;
    // const passwordConfirm=req.body.passwordConfirm;

    const{name,email,password,passwordConfirm}=req.body;
    
    //Querying into my database
    db.query(`SELECT email FROM users WHERE email=?`, [email], async(error, results)=>{
        if(error){
            console.log(error)
        }
        if(results.length >0){
            return res.render('register',{message: 'The email is already in use!'});
        }
        else if ( password !== passwordConfirm){
            return res.render('register',{message:'Passwords do not match!'});
        }
//hashing password 8 rounds
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
//inserting the user in the database
db.query(`INSERT INTO users SET?`,{name:name, email:email, password:hashedPassword}, (error, results)=>{
    if(error){
        console.log(error);
    }else{
        console.log(results);
        return res.render('register', {
            message: 'User registered!'
        });
    };
});


    //  res.send('testing')

    } );
    // res.send("User registered Successful!");

};

exports.login = async (res, req)=>{
    try{
        const{email, password}=req.body;

        //query the database for the user's email
        db.query(`SELECT * FROM users WHERE email=?`,[email], async(error, results)=>{
            if(error){
                console.log(error);
                return res.status(500).json('An error occurred');
            }
            //check if email exists and if password matches
            if(results.length === 0 || !(await bcrypt.compare(password, results[0].password))){
                return res.render('login',{
                    message: 'Invalid password or email'
                });
            }

            //if successful , redirect  or render a success page
            res.redirect('/dashboard');
        });
    }
    catch(error){
        console.log(error)
        res.status(500).send('An error occurred')

    }
};