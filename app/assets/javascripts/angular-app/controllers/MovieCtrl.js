movieApp.controller('MovieCtrl', ['$scope', 'rottenTomatoes', function($scope, rottenTomatoes) {

  $scope.findMovie = function() {
    rottenTomatoes.byTitle($scope.movieName).success(function(data) {
      $scope.total = data.total;
      $scope.movies = data.movies;
    });
  };

}]);
