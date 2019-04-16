const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');


const secret = require('../api/secret.js').jwtSecret;
const User = require('../helpers/users/user-model.js');

const router = express.Router();

router.post('/register', async (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash;
    const email = user.email;
    if (email && !validator.validate(email)) {
        res.status(400).json({ message: "Please provide a valid email" });
    } else if (!user.username || !user.password) {
        res.status(401).json({ message: 'You need to send an username and a password' });
    } 
    else if (await User.findBy({ username: user.username })) {
    res.status(400).json({ message: "That username is taken" });
     } 
    else {
        // const existingUser = User.findBy({ username: user.username });
        // if (existingUser) {
        //     res.status(400).json({ message: "That username is taken" });
        // } else {
            User.add(user)
                .then(saved => {
                    res.status(201).json(saved)
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        // }
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    User.findBy({ username })
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({ message: `Welcome ${user.username}`, token })
            } else {
                res.status(401).json({ message: 'Try Again' })
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                res.send(error)
            } else {
                res.send('You are logged out')
            }
        })
    } else {
        res.end();
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const option = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, secret, option);
}

module.exports = router;