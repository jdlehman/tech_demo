movieApp.directive('movieCard', [function() {
  return {
    restrict: 'A',
    scope: {
      title: '@',
      year: '@',
      ratings: '=',
      image: '@',
      link: '@'
    },
template: '<div class="movieCard">' +
            '<a href="{{link}}" target="_blank" style="text-decoration:none">' +
              '<div class="content">' +
                '<h2>{{title | trimTitle}}</h2>' +
                '<h3>{{year || "Unknown"}}</h3>' +
                '<image ng-src="{{image}}">' +
                '<div><strong>Critic:</strong> {{ratings.critics_score | ratingScore}}</div>' +
                '<div><strong>Audience:</strong> {{ratings.audience_score | ratingScore}}</div>' +
              '</div>' +
            '</a>' +
          '</div>'
  }
}]);
