import express from 'express';
import {calculateBmi}from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
//import { stringify } from 'querystring';
//const express = require('express');
//type Operation = 'multiply' | 'add' | 'divide';

interface  BodyType{
  daily_exercises:Array<number>
  target:number
}


const app = express();
app.use(express.json());

// unused variable,you can prefix it with an underscore
app.get('/ping', (_req, res) => {
  res.send('pong');
});
app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => { 
//const height= Number(_req.query.height);
//const weight= Number(_req.query.weight);
//res.send(calculateBmi(height, weight));
res.json(calculateBmi( Number(_req.query.height), Number(_req.query.weight)));
});

// app.get('/calculate', (req, res) => {
//   const { value1, value2, op } =  req.query
//   const ope:string=op;
//   let myOpe: Operation = ope as Operation;
// //const ope:Operation=op;

// const value3: number = Number(value1);
// const value4: number = Number(value2);

//  // const result = calculator(value3, value4, myOpe );
//   res.send(calculator(value3, value4, myOpe));
// });


app.get('/exerciselist', (_req, res) => {

  const list: number[] = [3, 0, 2, 4.5, 0, 3, 1];
  res.send(calculateExercises(list,2));
});


////// eslint-disable-next-line @typescript-eslint/no-explicit-any

//9.7 POST 
app.post('/exercises', (_req, res) => {


const body=_req.body as BodyType;
console.log(body);

const exercises=body.daily_exercises; 
const target=body.target;

if (!exercises || !target) {
  return res.status(400).json({ 
    error: "parameters missing" 
  });
}

if ( typeof target!=="number" ) {
  return res.status(400).json({ 
    error: "malformatted parameters" 
  });
}
try{
const result= (calculateExercises(exercises.map(Number), Number(target)));
res.json(result);
}catch (e){ 
  res.status(400).json({
    error:"malformatted parameters"
  });
  throw new Error("malformatted parameters"); 
}

 });


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//http://localhost:3003/bmi?height=180&weight=72

//npm run
