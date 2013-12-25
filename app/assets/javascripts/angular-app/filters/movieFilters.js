movieApp.filter('ratingScore', [function() {
  return function(rating) {
    if(rating <= 0) {
      return 'N/A';
    }
    else {
      return rating + '/100';
    }
  };
}]);

movieApp.filter('trimTitle', [function() {
  return function(title) {
    if(title.length > 20) {
      return title.substring(0, 20) + '...';
    }
    else {
      return title;
    }
  }
}]);
