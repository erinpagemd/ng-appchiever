angular
.module('appchiever')
.controller('ProfileCtrl', function ($firebaseObject, $scope, ProfileFactory, ActivityFactory, ClassFactory, $rootScope) {

  $scope.delete = function(){
    //delete the record
  }

  $scope.update = function(){
    $scope.edituser.$save($scope.edituser);

    console.log($scope.editingprofile);
    $scope.editingprofile = false;
    console.log($scope.editingprofile);
  }

  $scope.editingprofile = false;

  $scope.hovering = false;

  //add ClassFactory to the scope
  $scope.classes = ClassFactory;

  //add the class to firebase
  $scope.addClass = function() {
    $scope.classes.$add($scope.class);
  }

  //add ActivityFactory to the scope
  $scope.activities = ActivityFactory;

  //add the activity to firebase
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
