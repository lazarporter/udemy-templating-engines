const path = require('path');

const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const admins = require(path.join(__dirname,'routes', 'admin.js'))

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views') 

app.use(bodyParser.urlencoded({
    extended: false
}));

//handle the '/' route (any method - the exported router has diff functions for diff methods)
app.use('/', admins.routes)

app.get('/users', (req,res,next)=>{

    //the view for showing the list of users
    res.render('users', {
        pageTitle: 'User List',
        users: admins.names              
      })
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000")
})