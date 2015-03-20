angular
.module('appchiever')
.factory('AuthFactory', AuthFactory)

function AuthFactory (BASE_URL) {
  return {
    register: function (loginObj, cb) {
      var fb = new Firebase(BASE_URL);
      fb.createUser(loginObj, cb);
    },
    login: function(loginObj, cb) {
      var fb = new Firebase(BASE_URL);
      fb.authWithPassword(loginObj, cb);
    },
    logout: function (cb) {
      var fb = new Firebase(BASE_URL);
      fb.unauth(cb);
    }
  };
}
