const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are on the home page for USER');
});

router.get('/:userId', (req, res) => {
    const id = req.params.userId;

    res.send('You want to get a record for student with ID: ' + id);
});

router.post('/', (req, res) => {
    console.log('You posted some data.');
    res.send('You posted some user data.');
});

module.exports = router;