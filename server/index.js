const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./Routes/index.js')
const db = require('./database')
require('dotenv').config();
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, "../build")));
server.use(express.json());
server.use('/api', router)

const PORT = process.env.SERVER_PORT

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})