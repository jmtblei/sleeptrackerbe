const express = require('express');
const User = require('./user-model.js');
const Sleep = require('../sleepData/sleep-model');

const router = express.Router();

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const newData = await User.findSleepByUserId(id);
    if (!user) {
      res.status(404).json({ message: "We couldn't find the id you are looking for!" })
    } else if (!newData.length) {
      res.status(404).json({ message: "There aren't sleep data for the selected user!" })
    } else {
      res.status(200).json(newData);
    }
  } catch (error) {
    res.status(500).json('You got nada mas')
  }
})

router.get('/sleepstat/:id', async (req, res) => {
  const { id } = req.params
  try {
    let sleep = await Sleep.getAvgSleepData(id)
    res.status(200).json(sleep)
  } catch (error) {
    res.status(500).json('It\'s not working')
  }
})
module.exports = router;