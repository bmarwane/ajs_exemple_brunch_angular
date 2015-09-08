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
