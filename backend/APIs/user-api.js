const express = require("express");
const userApp = express.Router();
userApp.get('/login', (req, res)=>{
  res.render('login');
});
userApp.post('/login', (req, res)=>{
  
});
module.exports= userApp;