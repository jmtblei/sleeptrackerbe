const router = require('express').Router();
const Sleep = require('./sleep-model.js')

router.get('/', async(req, res) => {
    try {
        let sleep = await Sleep.find()
        res.status(200).json(sleep)
    } catch(error){
        res.status(500).json('You got nada mas')
    }
})

router.get('/sleepstats', async(req, res) => {
    try {
        let sleep = await Sleep.getStats()
        res.status(200).json(sleep)
    } catch(error){
        res.status(500).json('You got nada mas')
    }
})

router.post("/add", async (req, res) => {
    let { fullName, sleepMood, wakeMood, date, id, timeSlept } = req.body;
    Sleep.findById(id, fullName)
      .then(found => {
        Sleep.add(found.id, sleepMood, wakeMood, date, timeSlept)
          .then(added => {
            res.status(201).json(added);
          })
          .catch(({ code, message }) => {
            res.status(code).json({ message });
          });
      })
      .catch(({ code, message }) => {
        res.status(code).json({ message });
      });
  });
  



module.exports = router;