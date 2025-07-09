const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Dockerized Node.js app!</h1>');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
