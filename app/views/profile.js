angular
.module('appchiever')
.controller('ProfileCtrl', function ($firebaseObject, $scope, ProfileFactory, ActivityFactory, ClassFactory, $rootScope) {

  $scope.deleteClass = function(id){
    var classfb = $rootScope.usersfb.child('classes').child(id);
    var classobj = $firebaseObject(classfb);
    classobj.$remove();
  }

  $scope.deleteActivity = function(id){
    console.log(id);
    var activityfb = $rootScope.usersfb.child('activities').child(id);
    var activityobj = $firebaseObject(activityfb)
    activityobj.$remove();
  }

  $scope.update = function(){
    $scope.edituser.$save($scope.edituser);
    $scope.editingprofile = false;
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
    $scope.user = val;
    $scope.edituser = $firebaseObject($rootScope.profilefb);
  })

  //save the profile in firebase
  $scope.save = function () {
    ProfileFactory.$add($scope.user);
  };

});
