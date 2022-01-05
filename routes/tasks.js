const express = require('express');
const router = express.Router();

const {getAllTasks, createTask, getTask, UpdateTask, deleteTask} = require('../controllers/tasks');



router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:id').get(getTask)
router.route('/:id').patch(UpdateTask)
router.route('/:id').delete(deleteTask)

module.exports = router