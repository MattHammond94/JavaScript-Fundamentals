const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('../lib/thermostat');
const seanPaul = new Thermostat();

app.get('/ThermoPage', (req, res) => {
  res.send('I got the right temperature to shelter you from the storm')
});

app.listen(port);