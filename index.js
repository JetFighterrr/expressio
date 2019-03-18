'use strict';

const responseManager = require('./src/responseManager');
const morgan = require('morgan');
const express = require('express');
const app = express();

//here we have rest endpoints layer of our project

app.use(morgan('dev'));

//get read here
app.get('/read',(req,res) => {
    res.status(200).send(read())
  //res.status(200).json({message: 'OK', title:'Hello OK'});
});

//put edit here
app.put('/edit',(req,res) => {
  res.status(200).send(edit())
});

//post update here
// app.post('/post',(req,res) => {
//   res.status(200).json({message: update(), title:'Hello OK'});
// });

// post create here
app.post('/create/:name/:busy',(req,res) => {
  res.status(200).send(create(req.params));

});

//delete remove here()
// app.post('/post',(req,res) => {
//   res.status(200).json({message: remove(), title:'Hello OK'});
// });

// app.post('/edit',(req,res) => {
//   res.send(edit())
// });

app.listen(5000, () => console.log('LISTEN to 5000'));

//_______________________________________
//here we have logic layer of our project

function edit(){
  return "edit";
}
function read(){
  return "read"
}

function update(){
  return "update";
}

function create(reqJson){
  console.log(typeof reqJson.name);
  console.log(typeof reqJson.busy);
  return reqJson;
}

function remove() {
  return "remove";
}


//_______________________________________
//here we have layer of data