'use strict';

const responseManager = require('./src/responseManager');
const morgan = require('morgan');
const express = require('express');
const app = express();

// import {edit} from './src/responseManager';

console.log(edit());

app.use(morgan('dev'));
// app.require('http');


//get read here
app.get('/read',(req,res) => {
  res.send('Hello');
  res.status(200).json({message: 'OK', title:'Hello OK'});
});

//put edit here
app.get('/edit',(req,res) => {
  res.status(200).send(edit())
});

//post update here
// app.post('/post',(req,res) => {
//   res.status(200).json({message: update(), title:'Hello OK'});
// });

//post create here
// app.post('/post',(req,res) => {
//   res.status(200).json({message: create(), title:'Hello OK'});
// });

//delete remove here()
// app.post('/post',(req,res) => {
//   res.status(200).json({message: remove(), title:'Hello OK'});
// });

// app.post('/edit',(req,res) => {
//   res.send(edit())
// });


app.listen(5000, () => console.log('LISTEN to 5000'));

// 'use strict';
// export {edit} ;

function edit(){
  return "edit";
}
function read(){
  return "read"
}

function update(){
  return "update";
}

function create(){
  return "create";
}

function remove() {
  return "remove";
}
