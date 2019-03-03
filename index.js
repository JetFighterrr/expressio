const morgan = require('morgan');
const express = require('express');
const app = express();
import {read, update, remove, create, edit} from './src/responseManager'

app.use(morgan('dev'));

//get read here
app.get('/read',(req,res) => {
  // res.send('Hello');
  res.status(200).json({message: 'OK', title:'Hello OK'});
});

//put edit here
app.put('/edit',(req,res) => {
  res.send(edit())
});

//post update here
app.post('/post',(req,res) => {
  res.status(200).json({message: update(), title:'Hello OK'});
});

//post create here
app.post('/post',(req,res) => {
  res.status(200).json({message: remove(), title:'Hello OK'});
});

//delete remove here()
app.post('/post',(req,res) => {
  res.status(200).json({message: remove(), title:'Hello OK'});
});

// app.post('/edit',(req,res) => {
//   res.send(edit())
// });


app.listen(5000, () => console.log('LISTEN 5000'));
