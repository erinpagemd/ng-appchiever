angular
.module('appchiever')
.factory('ProfileFactory', function($firebaseArray, BASE_URL, $rootScope) {
  var profilefb = $rootScope.usersfb.child('profile');
  var fbArray = $firebaseArray(profilefb);

  return fbArray;
});
