const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../public')));

module.exports = app;
