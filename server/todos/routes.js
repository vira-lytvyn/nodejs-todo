var mongoose = require('mongoose');
var Todo = require('../db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, resp) {
  resp.send('Please use /api/todo in order to interact with db');
});

// get todos
router.get('/api/todos', function(req, resp) {
  Todo.find(function(err, todos) {
    console.log('test');
    if (err) {
      console.log(err);
    } else {
      console.log(todos);
      resp.send({todos: todos});
    }
  }).limit(20);
});

// get todo
router.get('/api/todo/:_id', function(req, resp) {
  Todo.findById(req.params._id, function(err, todo) {
    if (err) {
      console.log(err);
    } else {
      console.log(todo);
      resp.send({todo: todo});
    }
  });
});

// add todo
router.post('/api/todo/', function(req, resp) {
  var todo = new Todo(req.body);
  todo.save(function(err, todo) {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved!');
      console.log(todo);
      resp.send('Success!');
    }
  });
});

module.exports = router;
