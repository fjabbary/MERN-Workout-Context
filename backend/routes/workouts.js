const express = require('express');
const router = express.Router();

const { getAllWorkouts, getWorkout, addWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController.js');

router.get('/', getAllWorkouts)

router.get('/:id', getWorkout)

router.post('/', addWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router;