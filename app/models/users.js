angular
.module('appchiever')
.factory('AuthFactory', function (BASE_URL) {
  var fb = new Firebase(BASE_URL);

  function register (loginObj, cb) {
    fb.createUser(loginObj, cb);
  }

  function login (loginObj, cb) {
    fb.authWithPassword(loginObj, cb);
  }

  function logout (cb) {
    fb.unauth(cb);
  }

  return {register:register, login:login, logout:logout};
});
