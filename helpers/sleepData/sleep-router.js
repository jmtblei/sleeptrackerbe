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

<<<<<<< HEAD
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
=======
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

router.delete('/:id', async (req, res) => {
    try {
        const id = await Sleep.remove(req.params.id);
        if(id > 0){
            res.status(200).json({message: 'SleepStat has been deleted'})
        }else{
            res.status(404).json({message: 'SleepStat not found'})
        }   
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: 'Error removing stat',
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const sleep = await Sleep.update(req.params.id, req.body);
        if (sleep) {
          res.status(200).json('changes have been made');
        } else {
          res.status(404).json({ message: 'SleepStat could not be found' });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: 'Error updating the stats',
        });
      }
});


module.exports = router;
>>>>>>> 9e1cb6a71f850a05a328a102f5c4b58d3a76c4a6
