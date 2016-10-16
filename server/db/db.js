var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

var Todo = mongoose.model('Todo', {
	task: String,
	isCompleted: Boolean
});

// The following comment is for some testing purposes and should be romoved soon

// var appPostProt = function(req, resp) {
//   var todo = new Todo(req);
//   todo.save(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       resp();
//     }
//   });
// };

// var mockData = {
//   task: 'Complete TODO rest api',
//   isCompleted: false
// };

// appPostProt(mockData, function() {
//   console.log('Todo was added to db!');
// });

module.exports.Todo = Todo;
