import express from 'express';
import {calculateBmi}from './bmiCalculator';
//import { calculator } from './calculator'
//import { stringify } from 'querystring';
//const express = require('express');



//type Operation = 'multiply' | 'add' | 'divide';


const app = express();

// unused variable, you can prefix it with an underscore
app.get('/ping', (_req, res) => {
  res.send('pong');
});
app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.get('/bmi', (_req, res) => {


 // console.log(_req.query.height,"test", _req.query.weight);
 const height= Number(_req.query.height);
 const weight= Number(_req.query.weight);

  res.send(calculateBmi(height, weight));
});

// app.get('/calculate', (req, res) => {
//   const { value1, value2, op } =  req.query
//   const ope:string=op;
//   let myOpe: Operation = ope as Operation;
// //const ope:Operation=op;

// const value3: number = Number(value1);
// const value4: number = Number(value2);

//  // const result = calculator(value3, value4, myOpe )
//   res.send(calculator(value3, value4, myOpe));
// });


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//http://localhost:3003/bmi?height=180&weight=72

//npm run
