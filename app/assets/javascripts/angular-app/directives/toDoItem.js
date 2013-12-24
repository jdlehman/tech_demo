app.directive('toDoItem', [function() {
  return {
    restrict: 'A',
    scope: {
      todo: '='
    },
    template: '<li>' +
                '<input type="checkbox" ng-model="todo.done">' +
                '<strong>{{todo.name}}</strong>: {{todo.about}}' +
              '</li>'
  }
}]);
