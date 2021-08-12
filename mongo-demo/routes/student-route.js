const express = require('express');
const router = express.Router();

const Student = require('../models/student-model');

router.get('/', async (req, res) => { // promise 

    const students = await Student.find();
    res.status(200).json(students);

    // res.send('You are on the home page for students');
});

router.get('/all', (req, res) => {
    res.send('ALL STUDENTS');
});

router.get('/:studentId', (req, res) => {
    const id = req.params.studentId;

    res.send('You want to get a record for student with ID: ' + id);
});

// add student
router.post('/', async (req, res) => {
    const student = new Student({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        major: req.body.major,
        birthDate: req.body.birthDate
    });

    try {
        const result = await student.save();
        res.json(result);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/:id', (req, res) => {
    res.send(`You posted request to get student with ID: ${req.params.id}`);
});

// delete route
router.delete('/:studentId', async (req, res) => {
    
});



module.exports = router;