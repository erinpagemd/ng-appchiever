angular
.module('appchiever')
.controller('ProfileCtrl', function ($scope, ProfileFactory) {

  //add ProfileFactory to the scope
  $scope.user = ProfileFactory;

  //save the profile in firebase
  $scope.save = function () {
    $scope.user.$add($scope.user);
  };

});
