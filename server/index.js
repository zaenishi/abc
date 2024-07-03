const express = require('express');
const cors = require('cors');
const { getPrediction } = require('./predictions');

const app = express();
const port = 5000;

app.use(cors());

app.get('/predict', (req, res) => {
  const name = req.query.name;
  const prediction = getPrediction(name);
  res.json(prediction);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
