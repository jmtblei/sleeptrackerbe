const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../auth/auth.js');
const user = require('../helpers/users/user-router.js');
const restrict = require('../auth/restrict.js');
const sleep = require('../helpers/sleepData/sleep-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', auth);
server.use('/api/user', restrict, user);
server.use('/api/sleep', restrict, sleep);


server.get('/', (req,res) => {
    res.send('This is my Server!!!');
})

module.exports = server;