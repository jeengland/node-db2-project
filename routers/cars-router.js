const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile.js');

const db = knex(knexfile.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json({ data: cars })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Could not retrieve cars' })
        })
})

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars')
        .insert(carData)
        .then(ids => {
            res.status(201).json({ data: ids[0] })
        })
        .catch((err) => {
            res.status(500).json({ message: 'car could not be created' })
        })
})

module.exports = router;