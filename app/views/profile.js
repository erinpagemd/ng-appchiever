angular
.module('appchiever')
.controller('ProfileCtrl', function ($scope, ProfileFactory, ActivityFactory, ClassFactory, $rootScope) {

  $scope.editing = false;

  // $scope.showEditProfileForm = function () {
  //   console.log($scope.editing);
  //   console.log('clicked')
  //   $scope.editing = true;
  //   console.log($scope.editing);
  // };

  $scope.hovering = false;

  $scope.classes = ClassFactory;

  $scope.addClass = function() {
    $scope.classes.$add($scope.class);
  }

  $scope.activities = ActivityFactory;

  $scope.addActivity = function() {
    $scope.activities.$add($scope.activity);
  }

  //add ProfileFactory to the scope
  $scope.users= ProfileFactory;

  $rootScope.$watch('profile', function(val){
    console.log('profile changed', val);
    $scope.user = val;
  })

  //save the profile in firebase
  $scope.save = function () {
    $scope.users.$add($scope.user);
  };

});
