angular
.module('appchiever')
.controller('LoginCtrl', LoginController)

function LoginController ($scope, AuthFactory, BASE_URL) {

  $scope.getAuth = function () {
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
    AuthFactory.register(getLoginObj($scope), function (err, authData) {
      if (err && err.code === 'EMAIL_TAKEN') {
        console.log('Error creating user/ logging in: ', err);
        $scope.getAuth();
      } else if (err) {
        console.log('Error creating user: ', err)
      } else {
        console.log('User created successfully', authData);
        $scope.getAuth();
      }
    });
  };
}

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
