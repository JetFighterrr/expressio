const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('dev'));

app.get('/',(req,res) => {
  // res.send('Hello');
  res.status(200).json({message: 'OK', title:'Hello OK'});
});

app.get('/1',(req,res) => {
  res.send('Fuck off')
});

app.post('/post',(req,res) => {
  res.status(200).json({message: 'OK', title:'Hello OK'});
});


app.listen(5000, ()=>console.log('LISTEN 5000'));
