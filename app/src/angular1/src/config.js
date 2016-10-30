import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoFactory from './factories/todo-factory';
import todosController from './todos/todos';

const app = angular.module('app', [uiRouter, todoFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('todos', {
      url: '/angular1',
      template: require('./todos/todos.html'),
      controller: todosController
    });

  $locationProvider.html5Mode(true);
});

export default app;
