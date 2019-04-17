const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../auth/auth.js');
const user = require('../helpers/users/user-router.js');
const restrict = require('../auth/restrict.js');
<<<<<<< HEAD
const sleep = require('../helpers/sleepData/sleep-router')
=======
const sleep = require('../helpers/sleepData/sleep-router.js')
>>>>>>> 9e1cb6a71f850a05a328a102f5c4b58d3a76c4a6

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', auth);
server.use('/api/user', restrict, user);
<<<<<<< HEAD
server.use('/api/sleep', sleep);
=======
server.use('/api/sleep', restrict, sleep);

>>>>>>> 9e1cb6a71f850a05a328a102f5c4b58d3a76c4a6

server.get('/', (req,res) => {
    res.send('This is my Server!!!');
})

module.exports = server;