const express = require('express');

const app = express();
const name = "jessamyn";

app.get('/greeting/', (req, res) => {
console.log("hello " + name) //params are the req
  res.send("greetings " + req.params.name)
});
app.get('/greeting/:name', (req, res) => {
  res.send("greetings " + req.params.name)
});

app.listen(3000, () => {
  console.log('port is running');
});

// app.get('/greeting/:name', (req, res) => {
//   res.send({params: req.params, queries: req.query})
// });
