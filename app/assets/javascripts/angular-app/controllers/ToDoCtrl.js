app.controller('ToDoCtrl', ['$scope', function($scope) {
  $scope.todos = [{ name: 'test', about: 'testing', done: false }, { name: 'test2', about: 'test', done: true }];
  $scope.doneToDos = [];

  $scope.addToDo = function() {
    // add todo
    $scope.todos.push({ name: $scope.newToDo,
                          about: $scope.newAbout,
                          done: false });
    // reset text fields
    $scope.newToDo = '';
    $scope.newAbout = '';
  };

  $scope.clearDone = function() {
    var allToDos = $scope.todos;
    $scope.todos = [];
    angular.forEach(allToDos, function(todo) {
      if(todo.done) {
        $scope.doneToDos.push(todo);
      }
      else {
        $scope.todos.push(todo);
      }
    });
  };
}]);
