angular
.module('appchiever')
.controller('ProfileCtrl', function ($scope, ProfileFactory, ActivityFactory, $rootScope) {

  $scope.addActivity = function() {
    $scope.activity = null;
    $scope.activity = ActivityFactory;
    $scope.activity.$add($scope.activity);
  }

  //add ProfileFactory to the scope
  $scope.user = ProfileFactory;

  $rootScope.$watch('profile', function(val){
    console.log('profile changed', val);
    $scope.user = val;
  })

  //save the profile in firebase
  $scope.save = function () {
    $scope.user.$add($scope.user);
  };

});
