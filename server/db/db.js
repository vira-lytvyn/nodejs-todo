var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

var Todo = mongoose.model('Todo', {
	task: {
    type: String,
    required: true
  },
	isCompleted: {
    type: Boolean
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

module.exports.Todo = Todo;
