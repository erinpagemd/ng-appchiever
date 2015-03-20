angular
.module('appchiever')
.controller('LoginCtrl', function ($scope, AuthFactory, BASE_URL) {

  $scope.getCreds = function () {
    AuthFactory.login(getLoginObj($scope), function (err, authData) {
      if (err) {
        console.log('Error logging in user: ', err);
      } else {
        console.log('Logged in successfully ', authData);
        //need to grab simpleLogin/uid
      }
    });
  };

  $scope.makeAuth = function () {
    var loginObj = getLoginObj($scope);

    AuthFactory.register(loginObj, function (err, authData) {
      if (err && err.code === 'EMAIL_TAKEN') {
        console.log('Error creating user/ logging in: ', err);
        AuthFactory.login(loginObj, function (err, authData) {
          if (err) {
            console.log('Error in makeAuth email taken', err);
          } else {
            console.log('Logged in instead, ', authData);
          }
        });
      } else if (err) {
        console.log('Error creating user: ', err)
      } else {
        console.log('User created successfully', authData);
        AuthFactory.login(loginObj, function (err, authData) {
          if (err) {
            console.log('Error in makeAuth logging in user', err);
          } else {
            console.log('Logged in as well, ', authData);
          }
        })
      }
    });
  };
});

function getLoginObj ($scope) {
  var username = $scope.username;
  var password = $scope.password;
  var confirm = $scope.confirm;
  $scope.username = null;
  $scope.password = null;
  $scope.confirm = null;
  var loginObj = {
    email: username,
    password: password
  };
  console.log('getLoginObj: ', loginObj);
  return loginObj;
}
