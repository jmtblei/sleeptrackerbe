const express = require('express');
const User = require('./user-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// router.get('/username', async(req, res) => {
//   try {
//       let username = await User.findByUsername(req.body.username)
//       res.status(200).json(username)
//   } catch(error){
//       res.status(500).json('You got nada mas')
//   }
// })

router.get('/:id', async(req, res) => {
  try {
      let userID = await User.findSleepByUserId(req.params.id)
      res.status(200).json(userID)
  } catch(error){
      res.status(500).json('You got nada mas')
  }
})

module.exports = router;