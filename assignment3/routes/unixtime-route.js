const express = require('express');
const router = express.Router();

const Unixtime = require('../modules/unixtime-model'); 

router.get('/api/unixtime', async (req, res) => {
    
    res.send('unix');
});


module.exports = router;