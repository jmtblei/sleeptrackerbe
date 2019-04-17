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

router.get('/sleepstats/:id', async(req, res) => {
    const { id } = req.params;
    try {
        let sleep = await Sleep.getAvgTimeSlept(id)
        res.status(200).json(sleep)
    } catch(error){
        res.status(500).json('You got nada mas')
    }
})

module.exports = router;