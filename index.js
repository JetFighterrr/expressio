'use strict';
//_______________________________________
//here we have layer of data

let users =   [
              {first:'Sam', last: 'Bush'},
              {first:'Stan', last: 'Williams'}
              ];
let vmtype = ['client', 'server', 'ws'];
let vms = [{ name:'0-w10-a6', type: vmtype[2], leasee: users[0]}];

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
app.post('/create/:name/:vmtype/:leasee',(req,res) => {
  res.status(200).send(create(req.params.name,req.params.vmtype,req.params.leasee));

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
  return vms;
}

function update(){

  return read();
}

function create(nameHere, typeHere = vmtype[0], leaseeHere = users[0]){
  vms.push({name: nameHere, type: typeHere, leasee: leaseeHere});
  return vms;
}

function remove() {
  return "remove";
}


