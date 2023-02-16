const express = require('express');
const app = express();

requesttime=(req, res, next)=>{
    let date=new Date();
    let heure=date.getHours();
 console.log('Time : ' + heure + 'hours site web colsing');
 if(heure<17  && heure>9) next();
  
};


const path = require('path');

app.get('/home',requesttime, (req, res) => {
    res.sendFile(
    path.join (__dirname,"components","home.html")
)})
app.get('/contact',requesttime, (req, res) => {
    res.sendFile(
    path.join (__dirname,"components","contact.html")
)})

app.get('/ourservice',requesttime, (req, res) => {
    res.sendFile(
    path.join (__dirname,"components","ourservice.html")
)})
//app.get('/', (req, res) => {
  //  res.send('my first express server');
//})

// const port=5000


app.listen(5000,(err)=>{
    err? console.log(err) : console.log('server is running  in port 5000');}
    
)