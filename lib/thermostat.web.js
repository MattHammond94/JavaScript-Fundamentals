const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('../lib/thermostat');
const seanPaul = new Thermostat();
// let obj = { temperature: seanPaul };

app.get('/TheThermodome', (req, res) => {
  res.send('I got the right temperature to shelter you from the storm')
});

app.get('/temperature', (req, res) => {
  let altObj = { temperature: seanPaul.getTemperature() };
  res.send(JSON.stringify(altObj));
});

// ---------------------------------------
// This call is the same as above without the need for stringify.
// app.get('/temp', (req, res) => {
//   res.send(`Temperature: ${obj.temperature.getTemperature()}`);
// });

app.post('/up', (req, res) => {
  res.send(seanPaul.up());
});

app.post('/down', (req, res) => {
  res.send(seanPaul.down());
});

app.post('/savingModeOff', (req, res) => {
  res.send(seanPaul.setPowerSavingMode(false));
});

app.delete('/temperature', (req, res) => {
  res.send(seanPaul.reset());
});

app.listen(port);