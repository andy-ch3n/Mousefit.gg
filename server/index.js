const express = require('express');
const morgan = require('morgan');
const router = require('./Routes/index.js')
const db = require('./database')
require('dotenv').config();
const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use('/api', router)

const PORT = process.env.SERVER_PORT

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})