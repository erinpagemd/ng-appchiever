angular
.module('appchiever')
.controller('ProfileCtrl', function ($scope, ProfileFactory) {

  $scope.save = function () {
    ProfileFactory.save($scope.user);
  };
});
