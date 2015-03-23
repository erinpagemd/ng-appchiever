angular
.module('appchiever')
.controller('LoginCtrl', function ($scope, AuthFactory, BASE_URL, $rootScope) {
  $scope.auth = AuthFactory;

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
    }).catch(function(error){
      console.log('Authentication failed: ' + error)
    });
  }

  $scope.unauthUser = function () {
    AuthFactory.$unauth();
    console.log('unauth');
    $scope.loggedin = false;
  }

  $scope.showRegister = function () {
    $scope.registering = true;
  }

  $scope.cancelRegister = function () {
    $scope.registering = false;
  }

});
