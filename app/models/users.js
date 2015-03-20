angular
.module('appchiever')
.factory('AuthFactory', function (BASE_URL) {
  var fb = new Firebase(BASE_URL);

  function register (loginObj, cb) {
    fb.createUser(loginObj, cb);
    console.log(fb.getAuth());

  }

  function login (loginObj, cb) {
    fb.authWithPassword(loginObj, cb);
    console.log(fb.getAuth());

  }

  function logout (cb) {
    fb.unauth(cb);
  }

  return {register:register, login:login, logout:logout};
});
