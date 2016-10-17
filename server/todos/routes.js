var mongoose = require('mongoose');
var Todo = require('../db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/todos', function(req, res) {
  res.send('Please use /api/todo in order to interact with db');
});

// get todos
router.get('/api/todos', function(req, res) {
  Todo.find(function(err, todos) {
    console.log('test');
    if (err) {
      console.log(err);
    }
    res.send({todos: todos});
  }).limit(20);
});

// get todo
router.get('/api/todo/:_id', function(req, res) {
  Todo.findById(req.params._id, function(err, todo) {
    if (err) {
      console.log(err);
    }
    res.send({todo: todo});
  });
});

// add todo
router.post('/api/todo/', function(req, res) {
  var todo = new Todo(req.body);
  todo.save(function(err) {
    if (err) {
      console.log(err);
    }
    res.send('Todo saved!');
  });
});

// update todo
router.put('/api/todo/:_id', function(req, res) {
  Todo.findOneAndUpdate(
    {
      _id: mongoose.Types.ObjectId(req.params._id)
    },
    {
      task: req.body.task
    },
    {},

  // Todo.update(
  //   {
  //     _id: mongoose.Types.ObjectId(req.params._id)
  //   },
  //   {
  //     $set: {
  //       task: req.body.task
  //     }
  //   },
    function(err) {
      if (err) {
        console.log(err);
      }
      res.send('Todo updated!');
    }
  );
});

// delete todo
router.put('/api/todo/:_id', function(req, res) {
  Todo.remove(
    {
      _id: mongoose.Types.ObjectId(req.params._id)
    },
    function(err) {
      if (err) {
        console.log(err);
      }
      res.send('Todo deleted!');
    }
  );
});

module.exports = router;
