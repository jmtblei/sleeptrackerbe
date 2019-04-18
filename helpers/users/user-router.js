const express = require('express');
const User = require('./user-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send('Can not get users',err));
});

router.get('/:id', async(req, res) => {
  try {
      let userID = await User.findSleepByUserId(req.params.id)
      res.status(200).json(userID)
  } catch(error){
      res.status(500).json('You got nada mas', error)
  }
})

// router.get('/sleepstat/:id', async(req, res) => {
//   const { id } = req.params
//   try {
//       let sleep = await Sleep.getAvgTimeSlept(id)
//       res.status(200).json(sleep)
//   } catch(error){
//       res.status(500).json('It\'s not working')
//   }
// })
module.exports = router;