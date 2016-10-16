var mongoose = require('mongoose');
var Todo = require('../db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, resp) {
  resp.send('/Todos integrated correctly');
});

router.post('/', function(req, resp) {
  var todo = new Todo(req);
  todo.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      resp();
    }
  });
});

module.exports = router;
