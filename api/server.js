const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../auth/auth.js');
const User = require('../helpers/users/user-router.js')
const token = require('../auth/token.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', auth);
server.use('/api/user', token, User);

server.get('/', (req,res) => {
    res.send('This is my Server!!!');
})

module.exports = server;