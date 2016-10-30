import _ from 'lodash';
import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', () => {
  function createTask($scope) {
    if ($scope.newTask) {
      $scope.todos.push({
        task: $scope.newTask,
        isCompleted: false
      });
    }
    $scope.newTask = '';
  }

  function updateTask(todo) {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  }

  function deleteTask($scope, todo) {
    _.remove($scope.todos, todoToDelete => todoToDelete.task === todo.task);
  }

  return {
    createTask,
    updateTask,
    deleteTask
  }
});

export default todoFactory;
