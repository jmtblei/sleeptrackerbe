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

router.post('/', async (req, res) => {
    try {
        let sleep = await Sleep.insert(req.body);
            res.status(201).json(sleep);
    } 
    catch (error) {
        res.status(500).json({
            message:'Error posting sleep data'
        });
    }
});



module.exports = router;