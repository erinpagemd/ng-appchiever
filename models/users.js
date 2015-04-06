angular
.module('appchiever')
.factory('AuthFactory', function (BASE_URL, $firebaseAuth) {
    var fb = new Firebase(BASE_URL);
    return $firebaseAuth(fb);
});
