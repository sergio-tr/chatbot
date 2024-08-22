require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static(path.join(__dirname, '../')));

const options = {
  key: fs.readFileSync(path.join(__dirname, '../certificates/localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certificates/localhost.pem'))
};

const port = process.env.PORT || 9090;
https.createServer(options, app).listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});
