angular
.module('appchiever')
.controller('ProfileCtrl', ProfileController)

function ProfileController ($scope, ProfileFactory) {

  $scope.save = function () {
    ProfileFactory.save($scope.user);
  };
};
