import _ from 'lodash';
import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', ($http) => {
  function getTasks($scope) {
    $http.get(`/api/todos`)
      .success(response => {
        $scope.todos = response.todos;
      })
      .error(response => {
        if (!$scope.todos) {
          $scope.todos = [];
        }
        console.log(response);
      });
  }

  function createTask($scope) {
    var task = {};

    if ($scope.newTask) {
      task = {
        task: $scope.newTask,
        isCompleted: false
      };

      $http.post(`/api/todo`, task)
        .success(response => {
          $scope.todos.push(task);
          $scope.newTask = '';
        })
        .error(response => {
          console.log(response);
        });
    }
  }

  function updateTask(todo) {
    $http.put(`/api/todo/${todo._id}`,
      {
        task: todo.updatedTask
      })
      .success(response => {
        todo.task = todo.updatedTask;
        todo.isEditing = false;
      })
      .error(response => {
        console.log(response);
      });
  }

  function deleteTask($scope, todo) {
    $http.delete(`/api/todo/${todo._id}`)
      .success(response => {
        _.remove($scope.todos, todoToDelete => todoToDelete.task === todo.task);
      })
      .error(response => {
        console.log(response);
      });
  }

  return {
    getTasks,
    createTask,
    updateTask,
    deleteTask
  }
});

export default todoFactory;
