angular
.module('appchiever')
.controller('LoginCtrl', function ($scope, AuthFactory) {
  $scope.createUser = function () {
    AuthFactory.$createUser($scope.user)
    .then(function(userData){
      console.log("user created with uid: " + userData.uid);
    }).catch(function(error){
      console.log("error creating user: " + error);
    });
  }


  // $scope.getCreds = function () {
  //   AuthFactory.login($scope.user, function (err, authData) {
  //     if (err) {
  //       console.log('Error logging in user: ', err);
  //     } else {
  //       console.log('Logged in successfully ', authData);
  //       //need to grab simpleLogin/uid
  //     }
  //   });
  // };
  //
  // $scope.makeAuth = function () {
  //   AuthFactory.register($scope.user, function (err, authData) {
  //     if (err && err.code === 'EMAIL_TAKEN') {
  //       console.log('Error creating user/ logging in: ', err);
  //       $scope.getCreds();
  //     } else if (err) {
  //       console.log('Error creating user: ', err)
  //     } else {
  //       console.log('User created successfully', authData);
  //       $scope.getCreds();
  //     }
  //   });
  // };
});
