const express = require('express');
const app = express();
const port = 3000;

let counter = 0

app.get('/hello', (req, res) => {
  res.send('Hello, there Server!')
});

app.get('/counter', (req, res) => {
  res.send(`counter: ${counter}`)
});

app.post('/counter', (req, res) => {
  counter += 1
  res.send(`Counter incremented by 1 - Count is now: ${counter}`)
});

app.delete('/counter', (req, res) => {
  counter = 0
  res.send('Counter reset!')
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);