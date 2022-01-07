// crud functions for the tasks
// GET ALL TASKS
const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// CREATE NEW TASK
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
   
}

// GET SINGLE TASK
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if(!task) {
            return (
                res.status(404).json({msg: `No Task with this id : ${taskID}`})
            )
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// DELETE TASK
const deleteTask = async (req, res) => {
    try {
       const {id:taskID} = req.params
       const task = await Task.findOneAndDelete({ _id: taskID })
        if(!task) {
            return (
                res.status(404).json({msg: `No Task with this id : ${taskID}`})
            )
        }
        // res.status(200).json({task})
        res.status(200).json({msg: `Task with id : ${taskID} successfully deleted`})
    } catch (error) {
    res.status(500).json({msg: error})
   }
}


// UPDATE TASK
const UpdateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true, 
            runValidators:true
        })
        if(!task) {
            return (
                res.status(404).json({msg: `No Task with this id : ${taskID}`})
            )
        }
        res.status(200).json({task})
        // res.status(200).json({msg: `Task with id: ${taskID} has been successfully updated`})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// res.send('Update Task')
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask
}