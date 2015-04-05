angular
.module('appchiever')
.controller('LoginCtrl', function ($location, $scope, AuthFactory, BASE_URL, $rootScope) {
  $scope.googleAuth = function () {
    var fb = new Firebase(BASE_URL);
    fb.authWithOAuthPopup('google', function(error, authData) {
      if (!error){
        $location.path('/profile');
      }
    })
  }

  $scope.createUser = function () {
    AuthFactory.$createUser($scope.user)
    .then(function(userData){
      console.log("user created with uid: " + userData.uid);
      $scope.authUser();
    }).catch(function(error){
      console.log("error creating user: " + error);
      if (error.code === 'EMAIL_TAKEN') {
        $scope.authUser();
      }
    });
  }

  $scope.authUser = function () {
    AuthFactory.$authWithPassword($scope.user)
    .then(function(authData){
      console.log("logged in as: ", authData.uid);
      $location.path('/profile')
    }).catch(function(error){
      console.log('Authentication failed: ' + error)
    });
  }

  $scope.unauthUser = function () {
    AuthFactory.$unauth();
    console.log('unauth');
    $rootScope.profile = null;
    $rootScope.usersfb = null;
    $rootScope.loggedin = false;
  }

  $scope.showRegister = function () {
    $scope.registering = true;
  }

  $scope.cancelRegister = function () {
    $scope.registering = false;
  }

});
