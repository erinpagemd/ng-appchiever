angular
.module('appchiever')
.controller('ProfileCtrl', function ($firebaseObject, $scope, ProfileFactory, ActivityFactory, ClassFactory, $rootScope) {

  $scope.update = function(){
    $scope.edituser.$save($scope.edituser);

    console.log($scope.editingprofile);
    $scope.editingprofile = false;
    console.log($scope.editingprofile);
  }

  $scope.editingprofile = false;

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
  $scope.user = ProfileFactory;

  $rootScope.$watch('profile', function(val){
    console.log('profile changed', val);
    $scope.user = val;
    console.log('profilefb' + $rootScope.profilefb);
    $scope.edituser = $firebaseObject($rootScope.profilefb);
    console.log('edituser' + $scope.edituser)
  })

  //save the profile in firebase
  $scope.save = function () {
    ProfileFactory.$add($scope.user);
  };

});
