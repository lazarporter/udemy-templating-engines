const path = require('path');

const express = require('express')

const router = express.Router()
const names = [];

router.get('/', (req,res,next)=>{
    res.render('home', {
        pageTitle: 'Add Users'              
      })
})

router.post('/', (req,res,next)=>{
    names.push({
        name: req.body.username
      })
    res.redirect('/')
    //end of handling post route
    next()
})

exports.routes = router
exports.names = names