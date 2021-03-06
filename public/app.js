angular.module('myApp', ['ngRoute', 'templates']);

angular.module('myApp').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'app/views/page.html',
    controller: 'pageController'
  })
  .otherwise({
    redirectTo: '/'
  });
});

'use strict';

angular.module('myApp').controller('pageController', function($scope){
  $scope.noteList = [];

  $scope.addNote = function(){
    if($scope.noteInput !== undefined && $scope.noteInput !== ""){

      $scope.noteList.push({
        text: $scope.noteInput
      });
      $scope.noteInput = "";
    }
  };
});


//# sourceMappingURL=app.js.map