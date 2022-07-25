const express = require('express');

const app = express();

const port = process.env || 3000;

app.listen(port, () => {
  console.log('Server is listening at http:localhost:3000');
})

app.get('/', (req, res) => {
  res.json({
    text: 'Hejka'
  })
})