import _ from 'lodash';

export default function($scope) {
  $scope.todos = [];

  $scope.onCompletedClick = todo => {
    todo.isCompleted = !todo.isCompleted;
  }

  $scope.onEditClick = todo => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  }

  $scope.deleteTask = todo => {
    _.remove($scope.todos, todoToDelete => todoToDelete.task === todo.task);
  }

  $scope.updateTask = todo => {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  }

  $scope.onCancelClick = todo => {
    todo.isEditing = false;
  }

  $scope.createTask = (task) => {
    if (task) {
      $scope.todos.push({
        task: task,
        isCompleted: false
      });
    }
    $scope.newTask = '';
  }
}
