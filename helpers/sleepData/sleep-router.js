const router = require('express').Router();
const Sleep = require('./sleep-model.js')

router.get('/', async (req, res) => {
    try {
        let sleep = await Sleep.find()
        res.status(200).json(sleep)
    } catch (error) {
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
            message: 'Error posting sleep data'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = await Sleep.remove(req.params.id);
        if (id > 0) {
            res.status(200).json({ message: 'SleepStat has been deleted' })
        } else {
            res.status(404).json({ message: 'SleepStat not found' })
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
