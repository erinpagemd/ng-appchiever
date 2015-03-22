angular
.module('appchiever')
.controller('LoginCtrl', function ($scope, AuthFactory) {
  $scope.auth = AuthFactory;

  $scope.auth.$onAuth(function(authData){
    $scope.authData = authData;
    console.log('user logged in with authData: ' + authData);
  })

  $scope.createUser = function () {
    AuthFactory.$createUser($scope.user)
    .then(function(userData){
      console.log(AuthFactory);
      console.log("user created with uid: " + userData.uid);
    }).catch(function(error){
      console.log("error creating user: " + error);
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
    console.log('unauth')
  }

});
