import _ from 'lodash';

export default function($scope, todoFactory) {
  // $scope.todos = [];

  todoFactory.getTasks($scope);

  $scope.onCompletedClick = todo => {
    todo.isCompleted = !todo.isCompleted;
  };

  $scope.onEditClick = todo => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  };

  $scope.onCancelClick = todo => {
    todo.isEditing = false;
  };

  const { createTask, updateTask, deleteTask } = todoFactory;

  $scope.createTask = _.partial(createTask, $scope);

  $scope.updateTask = _.partial(updateTask);

  $scope.deleteTask = _.partial(deleteTask, $scope);
}
