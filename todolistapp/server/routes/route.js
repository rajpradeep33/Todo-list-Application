const express = require('express')
const Task = require('../models/models')
const router = express.router()
router.get('/' , (req,res) => {
   Task.find((err,docs) => {
       if(err) console.log(err)
       res.json(docs)
   }) 
})

router.post('/' , (req,res) => {
    const task = new Task(req.body)
    task.save((err,doc) => {
        if(err) console.log(err)
        res.json(doc)
    })
})
router.put('/:id' , (req,res) =>){
    Task.findoneAndUpdate({
        _id : req.params.id
    },req.body,{
        new : true
    },(err,docs) => {
        if(err) console.log(err)
        res,json(doc)
    })
})

router.delete('/:id',(req,res)) => {
    Task.findByAndDelete(req.params.id,(err,doc) => {
        res.json(doc)
    })
module.exports = router
