const router = require('express').Router();
const Sleep = require('./sleep-model.js')

router.get('/', async(req, res) => {
    try {
        let sleep = await Sleep.find()
        res.status(200).json(sleep)
    } catch(error){
        res.status(500).json('You got nada mas', error)
    }
})

router.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        let sleep = await Sleep.findById(id)
        res.status(200).json(sleep)
    } catch(error){
        res.status(500).json('Thats not a sleep id', error)
    }
})

router.get('/:id/:date', async(req, res) => {
    const { id, date } = req.params
    try {
        let sleep = await Sleep.findByDate(date, id)
        res.status(200).json(sleep)
    } catch(error){
        res.status(500).json('Can\'t get the date', error)
    }
})

router.post('/', async (req, res) => {
    try {
        let sleep = await Sleep.insert(req.body);
        if(typeof sleep.wakeMood === 'number'){
            res.status(201).json(sleep);
        }else{
            res.status(400).json('Error sending post')
        }
    } 
    catch (error) {
        res.status(500).json({
            message:'Error posting sleep data',
            error
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
          error
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
          error
        });
      }
});


module.exports = router;
