angular
.module('appchiever')
.factory('ProfileFactory', function($firebaseArray, BASE_URL) {
  var usersfb = new Firebase(BASE_URL + '/users');
  var fbArray = $firebaseArray(usersfb);

  return fbArray;
});
