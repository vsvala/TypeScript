import express from 'express';
import {calculateBmi}from './bmiCalculator';
//const express = require('express');
const app = express();

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




const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//http://localhost:3003/bmi?height=180&weight=72