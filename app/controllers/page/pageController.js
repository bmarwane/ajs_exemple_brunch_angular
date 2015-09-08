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
